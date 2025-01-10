import React from 'react';
import { MapPin, Phone, Star, Clock, ExternalLink } from 'lucide-react';
import { Veterinarian } from '../../types';

interface VetCardProps {
  vet: Veterinarian;
}

export function VetCard({ vet }: VetCardProps) {
  return (
    <div className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
      <img
        src={vet.image}
        alt={vet.name}
        className="w-full h-48 object-cover rounded-t-lg"
      />
      <div className="p-6">
        <div className="flex justify-between items-start">
          <div>
            <h3 className="text-xl font-semibold text-gray-900">{vet.name}</h3>
            <p className="text-sm text-gray-600">{vet.specialization}</p>
          </div>
          <div className="flex items-center">
            <Star className="w-5 h-5 text-yellow-400 fill-current" />
            <span className="ml-1 text-gray-600">{vet.rating}</span>
          </div>
        </div>
        <div className="mt-4 space-y-2">
          <div className="flex items-center text-gray-600">
            <MapPin className="w-4 h-4 mr-2" />
            <span>{vet.address}</span>
          </div>
          <div className="flex items-center text-gray-600">
            <Phone className="w-4 h-4 mr-2" />
            <span>{vet.phone}</span>
          </div>
          <div className="flex items-center text-gray-600">
            <Clock className="w-4 h-4 mr-2" />
            <span>{vet.hours}</span>
          </div>
        </div>
        <div className="mt-6 flex justify-between items-center">
          <a
            href={`tel:${vet.phone}`}
            className="text-indigo-600 hover:text-indigo-500 flex items-center"
          >
            Call Now
            <Phone className="w-4 h-4 ml-1" />
          </a>
          <a
            href={`https://maps.google.com/?q=${encodeURIComponent(vet.address)}`}
            target="_blank"
            rel="noopener noreferrer"
            className="text-indigo-600 hover:text-indigo-500 flex items-center"
          >
            Get Directions
            <ExternalLink className="w-4 h-4 ml-1" />
          </a>
        </div>
      </div>
    </div>
  );
}