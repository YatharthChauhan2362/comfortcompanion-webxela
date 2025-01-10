import { supabase } from '../lib/supabase';
import type { CartItem } from '../types';

export async function createOrder(total: number, items: CartItem[]) {
  const { data: { user } } = await supabase.auth.getUser();
  
  if (!user) {
    throw new Error('User must be authenticated to create an order');
  }

  // Create order with user_id
  const { data: order, error: orderError } = await supabase
    .from('orders')
    .insert([
      { 
        user_id: user.id,
        total, 
        status: 'pending' 
      }
    ])
    .select()
    .single();

  if (orderError) throw orderError;

  // Create order items
  const { error: itemsError } = await supabase
    .from('order_items')
    .insert(
      items.map(item => ({
        order_id: order.id,
        product_id: item.product.id,
        quantity: item.quantity,
        price: item.product.price
      }))
    );

  if (itemsError) throw itemsError;

  return order;
}