import { supabase } from '../lib/supabase';
import { loadStripe } from '@stripe/stripe-js';

const stripePromise = loadStripe(import.meta.env.VITE_STRIPE_PUBLIC_KEY);

export const createPayment = async (orderId: string, amount: number) => {
  const { data, error } = await supabase
    .from('payments')
    .insert([
      { order_id: orderId, amount, status: 'pending' }
    ])
    .select()
    .single();

  if (error) throw error;

  const stripe = await stripePromise;
  if (!stripe) throw new Error('Stripe failed to load');

  const { error: paymentError } = await stripe.redirectToCheckout({
    sessionId: data.payment_intent_id
  });

  if (paymentError) throw paymentError;
};