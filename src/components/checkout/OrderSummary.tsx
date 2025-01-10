import React from 'react';
import type { CartItem } from '../../types';

interface OrderSummaryProps {
  items: CartItem[];
  total: number;
}

export function OrderSummary({ items, total }: OrderSummaryProps) {
  return (
    <div className="bg-white shadow-lg rounded-lg p-6 mb-8">
      <h2 className="text-xl font-semibold mb-4">Order Summary</h2>
      {items.map(item => (
        <div key={item.product.id} className="flex justify-between mb-2">
          <span>{item.product.name} x {item.quantity}</span>
          <span>${(item.product.price * item.quantity).toFixed(2)}</span>
        </div>
      ))}
      <div className="border-t mt-4 pt-4">
        <div className="flex justify-between font-bold">
          <span>Total</span>
          <span>${total.toFixed(2)}</span>
        </div>
      </div>
    </div>
  );
}