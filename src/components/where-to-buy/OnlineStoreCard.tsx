import React from 'react';
import { Star, Truck, CreditCard } from 'lucide-react';
import { OnlineStore } from '../../types';

interface OnlineStoreCardProps {
  store: OnlineStore;
}

export function OnlineStoreCard({ store }: OnlineStoreCardProps) {
  return (
    <div className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
      <img
        src={store.image}
        alt={store.name}
        className="w-full h-48 object-cover rounded-t-lg"
      />
      <div className="p-6">
        <div className="flex justify-between items-start">
          <div>
            <h3 className="text-xl font-semibold text-gray-900">{store.name}</h3>
            <p className="text-sm text-gray-600">{store.description}</p>
          </div>
          <div className="flex items-center">
            <Star className="w-5 h-5 text-yellow-400 fill-current" />
            <span className="ml-1 text-gray-600">{store.rating}</span>
          </div>
        </div>
        <div className="mt-4 space-y-2">
          <div className="flex items-center text-gray-600">
            <Truck className="w-4 h-4 mr-2" />
            <span>{store.shipping}</span>
          </div>
          <div className="flex items-center text-gray-600">
            <CreditCard className="w-4 h-4 mr-2" />
            <span>{store.payment}</span>
          </div>
        </div>
        <div className="mt-6">
          <a
            href={store.website}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full inline-flex justify-center items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700"
          >
            Visit Store
          </a>
        </div>
      </div>
    </div>
  );
}