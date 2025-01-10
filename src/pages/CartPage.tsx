import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ShoppingBag } from 'lucide-react';
import { CartItem } from '../components/shop/CartItem';
import { useCartStore } from '../store/cartStore';

export function CartPage() {
  const navigate = useNavigate();
  const { items, total } = useCartStore();

  const handleCheckout = () => {
    // Navigate to checkout page
    navigate('/checkout');
  };

  if (items.length === 0) {
    return (
      <div className="min-h-screen bg-gray-50 flex flex-col items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
        <ShoppingBag className="w-12 h-12 text-gray-400" />
        <h2 className="mt-2 text-lg font-medium text-gray-900">Your cart is empty</h2>
        <p className="mt-1 text-sm text-gray-500">Start shopping to add items to your cart</p>
        <button
          onClick={() => navigate('/shop')}
          className="mt-4 inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700"
        >
          Continue Shopping
        </button>
      </div>
    );
  }

  return (
    <div className="bg-gray-50 min-h-screen py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl font-bold text-gray-900">Shopping Cart</h1>
        
        <div className="mt-8">
          <div className="bg-white shadow sm:rounded-lg">
            <div className="px-4 py-5 sm:p-6">
              {items.map((item) => (
                <CartItem key={item.product.id} item={item} />
              ))}
              
              <div className="mt-8 border-t pt-8">
                <div className="flex justify-between items-center">
                  <span className="text-base font-medium text-gray-900">Subtotal</span>
                  <span className="text-2xl font-bold text-gray-900">${total.toFixed(2)}</span>
                </div>
                <p className="mt-1 text-sm text-gray-500">Shipping and taxes calculated at checkout</p>
                
                <div className="mt-6">
                  <button
                    onClick={handleCheckout}
                    className="w-full flex justify-center items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700"
                  >
                    Proceed to Checkout
                  </button>
                </div>
                
                <div className="mt-4">
                  <button
                    onClick={() => navigate('/shop')}
                    className="w-full flex justify-center items-center px-6 py-3 border border-gray-300 text-base font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50"
                  >
                    Continue Shopping
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}