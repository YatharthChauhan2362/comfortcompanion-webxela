import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useCartStore } from '../store/cartStore';
import { OrderSummary } from '../components/checkout/OrderSummary';
import { CheckoutForm } from '../components/checkout/CheckoutForm';
import { PaymentQR } from '../components/checkout/PaymentQR';
import { useAuth } from '../context/AuthContext';

interface CheckoutFormData {
  name: string;
  email: string;
  phone: string;
  address: string;
}

export function CheckoutPage() {
  const navigate = useNavigate();
  const { user } = useAuth();
  const { items, total, clearCart } = useCartStore();
  const [showQR, setShowQR] = useState(false);
  const [paymentStatus, setPaymentStatus] = useState<'pending' | 'success'>('pending');

  const handleFormSubmit = (formData: CheckoutFormData) => {
    // In a real app, save the form data
    console.log('Form data:', formData);
    setShowQR(true);
  };

  const handleCheckStatus = () => {
    // Simulate payment verification
    setPaymentStatus('success');
    
    // In a real app, you would:
    // 1. Check the actual payment status
    // 2. Update the order status
    // 3. Clear the cart only after confirming payment
    setTimeout(() => {
      clearCart();
    }, 2000);
  };

  if (items.length === 0) {
    navigate('/cart');
    return null;
  }

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-3xl font-bold mb-8">Checkout</h1>
        
        <OrderSummary items={items} total={total} />

        {!showQR ? (
          <div className="mt-8">
            <h2 className="text-xl font-semibold mb-4">Shipping Information</h2>
            <CheckoutForm onSubmit={handleFormSubmit} />
          </div>
        ) : (
          <div className="mt-8">
            <h2 className="text-xl font-semibold mb-4">Complete Payment</h2>
            <PaymentQR 
              onCheckStatus={handleCheckStatus}
              paymentStatus={paymentStatus}
            />
          </div>
        )}
      </div>
    </div>
  );
}