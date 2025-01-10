import React from 'react';
import { RefreshCw } from 'lucide-react';

interface PaymentStatusProps {
  onCheckStatus: () => void;
}

export function PaymentStatus({ onCheckStatus }: PaymentStatusProps) {
  return (
    <button
      onClick={onCheckStatus}
      className="inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
    >
      <RefreshCw className="w-4 h-4 mr-2" />
      Check Payment Status
    </button>
  );
}