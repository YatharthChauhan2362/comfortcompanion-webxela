import React, { useState } from 'react';
import { Search, MapPin } from 'lucide-react';
import { VetCard } from '../components/where-to-buy/VetCard';
import { veterinarians } from '../data/veterinarians';

export function FindVetsPage() {
  const [searchQuery, setSearchQuery] = useState('');
  const [location, setLocation] = useState('');

  const filteredVets = veterinarians.filter(
    (vet) =>
      vet.name.toLowerCase().includes(searchQuery.toLowerCase()) &&
      vet.address.toLowerCase().includes(location.toLowerCase())
  );

  return (
    <div className="bg-gray-50 min-h-screen py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h1 className="text-3xl font-bold text-gray-900 sm:text-4xl">Find a Veterinarian</h1>
          <p className="mt-3 max-w-2xl mx-auto text-xl text-gray-500 sm:mt-4">
            Connect with qualified veterinarians for expert pet care and supplies
          </p>
        </div>

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
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md leading-5 bg-white placeholder-gray-500 focus:outline-none focus:placeholder-gray-400 focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                  placeholder="Search veterinarians..."
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
                  onChange={(e) => setLocation(e.target.value)}
                  className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md leading-5 bg-white placeholder-gray-500 focus:outline-none focus:placeholder-gray-400 focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                  placeholder="Enter location..."
                />
              </div>
            </div>
          </div>
        </div>

        <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {filteredVets.map((vet) => (
            <VetCard key={vet.id} vet={vet} />
          ))}
        </div>
      </div>
    </div>
  );
}