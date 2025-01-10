import React, { useState } from 'react';
import { OnlineStoreCard } from '../components/where-to-buy/OnlineStoreCard';
import { LocationSearch } from '../components/where-to-buy/LocationSearch';
import { PageHeader } from '../components/where-to-buy/PageHeader';
import { onlineStores } from '../data/onlineStores';

export function FindOnlineStoresPage() {
  const [searchQuery, setSearchQuery] = useState('');
  const [location, setLocation] = useState('');

  const filteredStores = onlineStores.filter((store) =>
    store.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="bg-gray-50 min-h-screen py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <PageHeader
          title="Online Pet Stores"
          description="Shop conveniently from trusted online retailers offering wide selections, competitive prices, and reliable delivery services for all your pet supplies."
        />

        <LocationSearch
          searchQuery={searchQuery}
          location={location}
          onSearchChange={setSearchQuery}
          onLocationChange={setLocation}
          placeholder="Search online stores..."
        />

        {filteredStores.length === 0 ? (
          <div className="text-center mt-12">
            <p className="text-gray-500">No online stores found matching your search criteria.</p>
          </div>
        ) : (
          <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {filteredStores.map((store) => (
              <OnlineStoreCard key={store.id} store={store} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}