import React from 'react';
import { RefreshCw } from 'lucide-react';
import { PaymentSuccessModal } from './PaymentSuccessModal';

interface PaymentQRProps {
  onCheckStatus: () => void;
  paymentStatus: 'pending' | 'success';
}

export function PaymentQR({ onCheckStatus, paymentStatus }: PaymentQRProps) {
  return (
    <div className="text-center">
      <div className="bg-gray-100 p-8 rounded-lg inline-block mb-6">
        <img 
          src="/qrcode.png" 
          alt="Payment QR Code"
          className="w-48 h-48"
        />
      </div>
      
      <p className="text-lg font-medium text-gray-900 mb-4">
        Scan QR code to complete payment
      </p>
      
      <button
        onClick={onCheckStatus}
        className="inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
      >
        <RefreshCw className="w-4 h-4 mr-2" />
        Check Payment Status
      </button>

      {paymentStatus === 'success' && <PaymentSuccessModal />}
    </div>
  );
}