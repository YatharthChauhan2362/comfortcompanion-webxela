import React from 'react';
import { Search, MapPin } from 'lucide-react';

interface LocationSearchProps {
  searchQuery: string;
  location: string;
  onSearchChange: (value: string) => void;
  onLocationChange: (value: string) => void;
  placeholder: string;
}

export function LocationSearch({ 
  searchQuery, 
  location, 
  onSearchChange, 
  onLocationChange,
  placeholder 
}: LocationSearchProps) {
  return (
    <div className="mt-10 max-w-xl mx-auto">
      <div className="flex flex-col sm:flex-row gap-4">
        <div className="flex-1">
          <div className="relative rounded-md shadow-sm">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center">
              <Search className="h-5 w-5 text-gray-400" />
            </div>
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => onSearchChange(e.target.value)}
              className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md leading-5 bg-white placeholder-gray-500 focus:outline-none focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              placeholder={placeholder}
            />
          </div>
        </div>
        <div className="flex-1">
          <div className="relative rounded-md shadow-sm">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center">
              <MapPin className="h-5 w-5 text-gray-400" />
            </div>
            <input
              type="text"
              value={location}
              onChange={(e) => onLocationChange(e.target.value)}
              className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md leading-5 bg-white placeholder-gray-500 focus:outline-none focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              placeholder="Enter location..."
            />
          </div>
        </div>
      </div>
    </div>
  );
}