import React from 'react';
import { ShoppingCart } from 'lucide-react';
import { Product } from '../../types';
import { useCartStore } from '../../store/cartStore';

interface ProductCardProps {
  product: Product;
}

export function ProductCard({ product }: ProductCardProps) {
  const addItem = useCartStore(state => state.addItem);

  return (
    <div className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
      <img
        src={product.image}
        alt={product.name}
        className="w-full h-48 object-cover rounded-t-lg"
      />
      <div className="p-4">
        <div className="flex justify-between items-start">
          <div>
            <h3 className="text-lg font-semibold text-gray-900">{product.name}</h3>
            <p className="text-sm text-gray-500">{product.category}</p>
          </div>
          <span className="text-lg font-bold text-indigo-600">${product.price}</span>
        </div>
        <p className="mt-2 text-sm text-gray-600">{product.description}</p>
        <div className="mt-4 flex items-center justify-between">
          <span className="text-sm text-gray-500">{product.stock} in stock</span>
          <button
            onClick={() => addItem(product)}
            className="flex items-center px-4 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700 transition-colors"
          >
            <ShoppingCart className="w-4 h-4 mr-2" />
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
}