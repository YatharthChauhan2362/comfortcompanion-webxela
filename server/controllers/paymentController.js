import Stripe from 'stripe';
import Payment from '../models/Payment.js';
import Order from '../models/Order.js';

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);

export const createPaymentIntent = async (req, res) => {
  try {
    const { orderId } = req.body;
    
    const order = await Order.findById(orderId);
    if (!order) {
      return res.status(404).json({ message: 'Order not found' });
    }

    // Create payment intent with Stripe
    const paymentIntent = await stripe.paymentIntents.create({
      amount: Math.round(order.total * 100), // Convert to cents
      currency: 'usd',
      metadata: {
        orderId: order._id.toString(),
        userId: req.user.id
      }
    });

    // Create payment record
    const payment = new Payment({
      order: order._id,
      stripePaymentIntentId: paymentIntent.id,
      amount: order.total,
      paymentMethod: 'card'
    });
    await payment.save();

    res.json({
      clientSecret: paymentIntent.client_secret,
      paymentId: payment._id
    });
  } catch (error) {
    res.status(500).json({ message: 'Error creating payment intent', error: error.message });
  }
};

export const handleWebhook = async (req, res) => {
  const sig = req.headers['stripe-signature'];
  let event;

  try {
    event = stripe.webhooks.constructEvent(
      req.body,
      sig,
      process.env.STRIPE_WEBHOOK_SECRET
    );
  } catch (err) {
    return res.status(400).json({ message: `Webhook Error: ${err.message}` });
  }

  try {
    switch (event.type) {
      case 'payment_intent.succeeded': {
        const paymentIntent = event.data.object;
        const payment = await Payment.findOne({
          stripePaymentIntentId: paymentIntent.id
        });
        
        if (payment) {
          payment.status = 'succeeded';
          payment.billingDetails = paymentIntent.charges.data[0].billing_details;
          await payment.save();

          // Update order status
          const order = await Order.findById(payment.order);
          if (order) {
            order.paymentInfo.status = 'completed';
            order.status = 'processing';
            await order.save();
          }
        }
        break;
      }
      
      case 'payment_intent.payment_failed': {
        const paymentIntent = event.data.object;
        const payment = await Payment.findOne({
          stripePaymentIntentId: paymentIntent.id
        });
        
        if (payment) {
          payment.status = 'failed';
          await payment.save();

          const order = await Order.findById(payment.order);
          if (order) {
            order.paymentInfo.status = 'failed';
            await order.save();
          }
        }
        break;
      }
    }

    res.json({ received: true });
  } catch (error) {
    res.status(500).json({ message: 'Error processing webhook', error: error.message });
  }
};

export const getPaymentStatus = async (req, res) => {
  try {
    const payment = await Payment.findById(req.params.id);
    if (!payment) {
      return res.status(404).json({ message: 'Payment not found' });
    }

    res.json({ status: payment.status });
  } catch (error) {
    res.status(500).json({ message: 'Error fetching payment status', error: error.message });
  }
};

export const refundPayment = async (req, res) => {
  try {
    const { reason } = req.body;
    const payment = await Payment.findById(req.params.id);
    
    if (!payment) {
      return res.status(404).json({ message: 'Payment not found' });
    }

    if (payment.status !== 'succeeded') {
      return res.status(400).json({ message: 'Payment cannot be refunded' });
    }

    const refund = await stripe.refunds.create({
      payment_intent: payment.stripePaymentIntentId,
      reason: reason || 'requested_by_customer'
    });

    payment.status = 'refunded';
    payment.refundReason = reason;
    payment.refundedAt = new Date();
    await payment.save();

    const order = await Order.findById(payment.order);
    if (order) {
      order.paymentInfo.status = 'refunded';
      await order.save();
    }

    res.json({ refund });
  } catch (error) {
    res.status(500).json({ message: 'Error processing refund', error: error.message });
  }
};