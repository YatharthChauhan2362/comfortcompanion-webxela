import React, { useState } from 'react';
import { RetailerCard } from '../components/where-to-buy/RetailerCard';
import { LocationSearch } from '../components/where-to-buy/LocationSearch';
import { PageHeader } from '../components/where-to-buy/PageHeader';
import { retailers } from '../data/retailers';

export function FindRetailersPage() {
  const [searchQuery, setSearchQuery] = useState('');
  const [location, setLocation] = useState('');

  const filteredRetailers = retailers.filter(
    (retailer) =>
      retailer.name.toLowerCase().includes(searchQuery.toLowerCase()) &&
      retailer.address.toLowerCase().includes(location.toLowerCase())
  );

  return (
    <div className="bg-gray-50 min-h-screen py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <PageHeader
          title="Find Local Pet Retailers"
          description="Discover trusted pet stores in your area offering quality products, expert advice, and personalized service for all your pet care needs."
        />

        <LocationSearch
          searchQuery={searchQuery}
          location={location}
          onSearchChange={setSearchQuery}
          onLocationChange={setLocation}
          placeholder="Search retailers..."
        />

        {filteredRetailers.length === 0 ? (
          <div className="text-center mt-12">
            <p className="text-gray-500">No retailers found matching your search criteria.</p>
          </div>
        ) : (
          <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {filteredRetailers.map((retailer) => (
              <RetailerCard key={retailer.id} retailer={retailer} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}