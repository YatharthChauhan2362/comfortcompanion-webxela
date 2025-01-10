import Order from '../models/Order.js';
import Product from '../models/Product.js';

export const createOrder = async (req, res) => {
  try {
    const { items, shippingAddress, billingAddress, paymentInfo } = req.body;
    
    // Verify products and check stock
    const productIds = items.map(item => item.product);
    const products = await Product.find({ _id: { $in: productIds } });
    
    if (products.length !== items.length) {
      return res.status(400).json({ message: 'Some products not found' });
    }
    
    // Create order items with current prices
    const orderItems = items.map(item => {
      const product = products.find(p => p._id.toString() === item.product);
      if (product.stock < item.quantity) {
        throw new Error(`Insufficient stock for ${product.name}`);
      }
      return {
        product: product._id,
        quantity: item.quantity,
        price: product.price
      };
    });
    
    const order = new Order({
      user: req.user.id,
      items: orderItems,
      shippingAddress,
      billingAddress,
      paymentInfo
    });
    
    // Calculate totals
    order.calculateTotals();
    
    // Update product stock
    await Promise.all(orderItems.map(item => {
      const product = products.find(p => p._id.toString() === item.product.toString());
      return product.updateStock(item.quantity);
    }));
    
    await order.save();
    
    res.status(201).json(order);
  } catch (error) {
    res.status(400).json({ message: 'Error creating order', error: error.message });
  }
};

export const getOrderById = async (req, res) => {
  try {
    const order = await Order.findById(req.params.id)
      .populate('user', 'name email')
      .populate('items.product');
    
    if (!order) {
      return res.status(404).json({ message: 'Order not found' });
    }
    
    // Check if user is authorized to view this order
    if (order.user._id.toString() !== req.user.id && req.user.role !== 'admin') {
      return res.status(403).json({ message: 'Not authorized to view this order' });
    }
    
    res.json(order);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching order', error: error.message });
  }
};

export const getUserOrders = async (req, res) => {
  try {
    const { status, sort = '-createdAt', page = 1, limit = 10 } = req.query;
    
    const query = { user: req.user.id };
    if (status) query.status = status;
    
    const skip = (page - 1) * limit;
    
    const [orders, total] = await Promise.all([
      Order.find(query)
        .sort(sort)
        .skip(skip)
        .limit(parseInt(limit))
        .populate('items.product', 'name image price'),
      Order.countDocuments(query)
    ]);
    
    res.json({
      orders,
      pagination: {
        total,
        pages: Math.ceil(total / limit),
        currentPage: page,
        limit
      }
    });
  } catch (error) {
    res.status(500).json({ message: 'Error fetching orders', error: error.message });
  }
};

export const updateOrderStatus = async (req, res) => {
  try {
    const { status } = req.body;
    const order = await Order.findById(req.params.id);
    
    if (!order) {
      return res.status(404).json({ message: 'Order not found' });
    }
    
    await order.updateStatus(status);
    res.json(order);
  } catch (error) {
    res.status(400).json({ message: 'Error updating order status', error: error.message });
  }
};

export const addOrderTracking = async (req, res) => {
  try {
    const { carrier, trackingNumber, estimatedDelivery } = req.body;
    const order = await Order.findById(req.params.id);
    
    if (!order) {
      return res.status(404).json({ message: 'Order not found' });
    }
    
    await order.addTracking(carrier, trackingNumber, estimatedDelivery);
    res.json(order);
  } catch (error) {
    res.status(400).json({ message: 'Error adding tracking information', error: error.message });
  }
};