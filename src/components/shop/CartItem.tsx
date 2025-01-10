import React from 'react';
import { Minus, Plus, Trash2 } from 'lucide-react';
import { CartItem as CartItemType } from '../../types';
import { useCartStore } from '../../store/cartStore';

interface CartItemProps {
  item: CartItemType;
}

export function CartItem({ item }: CartItemProps) {
  const { updateQuantity, removeItem } = useCartStore();

  return (
    <div className="flex items-center py-4 border-b">
      <img
        src={item.product.image}
        alt={item.product.name}
        className="w-20 h-20 object-cover rounded"
      />
      <div className="ml-4 flex-grow">
        <h3 className="text-lg font-medium text-gray-900">{item.product.name}</h3>
        <p className="text-sm text-gray-500">${item.product.price}</p>
      </div>
      <div className="flex items-center space-x-2">
        <button
          onClick={() => updateQuantity(item.product.id, Math.max(0, item.quantity - 1))}
          className="p-1 rounded-md hover:bg-gray-100"
        >
          <Minus className="w-4 h-4" />
        </button>
        <span className="w-8 text-center">{item.quantity}</span>
        <button
          onClick={() => updateQuantity(item.product.id, item.quantity + 1)}
          className="p-1 rounded-md hover:bg-gray-100"
        >
          <Plus className="w-4 h-4" />
        </button>
      </div>
      <button
        onClick={() => removeItem(item.product.id)}
        className="ml-4 p-2 text-red-600 hover:text-red-800"
      >
        <Trash2 className="w-5 h-5" />
      </button>
    </div>
  );
}