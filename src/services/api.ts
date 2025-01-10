import { supabase } from '../lib/supabase';

export const getProducts = async () => {
  const { data, error } = await supabase
    .from('products')
    .select('*');
  
  if (error) throw error;
  return data;
};

export const getMyOrders = async () => {
  const { data, error } = await supabase
    .from('orders')
    .select(`
      *,
      order_items (
        *,
        product_id
      )
    `)
    .order('created_at', { ascending: false });
  
  if (error) throw error;
  return data;
};

export const createOrder = async (orderData: any) => {
  const { data, error } = await supabase
    .from('orders')
    .insert([orderData])
    .select()
    .single();
  
  if (error) throw error;
  return data;
};