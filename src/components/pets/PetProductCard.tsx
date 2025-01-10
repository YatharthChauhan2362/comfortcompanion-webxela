import React from 'react';
import { ShoppingCart, Heart } from 'lucide-react';
import { useCartStore } from '../../store/cartStore';
import { PetProduct } from '../../types';

interface PetProductCardProps {
  product: PetProduct;
}

export function PetProductCard({ product }: PetProductCardProps) {
  const addToCart = useCartStore(state => state.addItem);

  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
      <div className="relative">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-48 object-cover"
        />
        <button
          className="absolute top-2 right-2 p-2 rounded-full bg-white/80 hover:bg-white transition-colors"
          aria-label="Add to wishlist"
        >
          <Heart className="w-5 h-5 text-gray-600 hover:text-red-500" />
        </button>
      </div>
      
      <div className="p-4">
        <div className="flex justify-between items-start mb-2">
          <div>
            <h3 className="text-lg font-semibold text-gray-900">{product.name}</h3>
            <p className="text-sm text-gray-500">{product.category}</p>
          </div>
          <span className="text-lg font-bold text-indigo-600">${product.price}</span>
        </div>
        
        <p className="text-sm text-gray-600 mb-4">{product.description}</p>
        
        <div className="flex items-center justify-between">
          <span className="text-sm text-gray-500">
            {product.stock > 0 ? `${product.stock} in stock` : 'Out of stock'}
          </span>
          <button
            onClick={() => addToCart(product)}
            disabled={product.stock === 0}
            className={`flex items-center px-4 py-2 rounded-md text-sm font-medium transition-colors
              ${product.stock > 0 
                ? 'bg-indigo-600 text-white hover:bg-indigo-700' 
                : 'bg-gray-200 text-gray-500 cursor-not-allowed'}`}
          >
            <ShoppingCart className="w-4 h-4 mr-2" />
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
}