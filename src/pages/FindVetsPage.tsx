import React, { useState } from 'react';
import { VetCard } from '../components/where-to-buy/VetCard';
import { LocationSearch } from '../components/where-to-buy/LocationSearch';
import { PageHeader } from '../components/where-to-buy/PageHeader';
import { veterinarians } from '../data/veterinarians';

export function FindVetsPage() {
  const [searchQuery, setSearchQuery] = useState('');
  const [location, setLocation] = useState('');

  const filteredVets = veterinarians.filter(
    (vet) =>
      (vet.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
       vet.specialization.toLowerCase().includes(searchQuery.toLowerCase())) &&
      vet.address.toLowerCase().includes(location.toLowerCase())
  );

  return (
    <div className="bg-gray-50 min-h-screen py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <PageHeader
          title="Find a Veterinarian"
          description="Connect with qualified veterinarians providing comprehensive pet healthcare services, from routine check-ups to specialized treatments."
        />

        <LocationSearch
          searchQuery={searchQuery}
          location={location}
          onSearchChange={setSearchQuery}
          onLocationChange={setLocation}
          placeholder="Search veterinarians..."
        />

        {filteredVets.length === 0 ? (
          <div className="text-center mt-12">
            <p className="text-gray-500">No veterinarians found matching your search criteria.</p>
          </div>
        ) : (
          <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {filteredVets.map((vet) => (
              <VetCard key={vet.id} vet={vet} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}