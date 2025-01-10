import React from 'react';
import { MapPin, Clock, Star, ExternalLink } from 'lucide-react';
import { Retailer } from '../../types';

interface RetailerCardProps {
  retailer: Retailer;
}

export function RetailerCard({ retailer }: RetailerCardProps) {
  return (
    <div className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
      <img
        src={retailer.image}
        alt={retailer.name}
        className="w-full h-48 object-cover rounded-t-lg"
      />
      <div className="p-6">
        <div className="flex justify-between items-start">
          <h3 className="text-xl font-semibold text-gray-900">{retailer.name}</h3>
          <div className="flex items-center">
            <Star className="w-5 h-5 text-yellow-400 fill-current" />
            <span className="ml-1 text-gray-600">{retailer.rating}</span>
          </div>
        </div>
        <div className="mt-4 space-y-2">
          <div className="flex items-center text-gray-600">
            <MapPin className="w-4 h-4 mr-2" />
            <span>{retailer.address}</span>
          </div>
          <div className="flex items-center text-gray-600">
            <Clock className="w-4 h-4 mr-2" />
            <span>{retailer.hours}</span>
          </div>
        </div>
        <div className="mt-6 flex justify-between items-center">
          <a
            href={`https://maps.google.com/?q=${encodeURIComponent(retailer.address)}`}
            target="_blank"
            rel="noopener noreferrer"
            className="text-indigo-600 hover:text-indigo-500 flex items-center"
          >
            Get Directions
            <ExternalLink className="w-4 h-4 ml-1" />
          </a>
          {retailer.website && (
            <a
              href={retailer.website}
              target="_blank"
              rel="noopener noreferrer"
              className="text-indigo-600 hover:text-indigo-500 flex items-center"
            >
              Visit Website
              <ExternalLink className="w-4 h-4 ml-1" />
            </a>
          )}
        </div>
      </div>
    </div>
  );
}