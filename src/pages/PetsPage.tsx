import React, { useState } from 'react';
import { Search, Filter } from 'lucide-react';
import { pets } from '../data/pets';
import { petProducts } from '../data/petProducts';
import { PetProductCard } from '../components/pets/PetProductCard';

export function PetsPage() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedPetType, setSelectedPetType] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('');

  const categories = Array.from(new Set(petProducts.map(product => product.category)));
  const petTypes = Array.from(new Set(petProducts.map(product => product.petType)));

  const filteredProducts = petProducts.filter(product => {
    const matchesSearch = product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         product.description.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesPetType = !selectedPetType || product.petType === selectedPetType;
    const matchesCategory = !selectedCategory || product.category === selectedCategory;
    return matchesSearch && matchesPetType && matchesCategory;
  });

  return (
    <div className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Our Pets</h2>
          <p className="mt-2 text-lg leading-8 text-gray-600">
            Discover comprehensive information about different pets and find your perfect companion
          </p>
        </div>

        {/* Pet Categories */}
        <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-3">
          {pets.map((pet) => (
            <article key={pet.name} className="flex flex-col items-start">
              <div className="relative w-full">
                <img
                  src={pet.image}
                  alt={pet.name}
                  className="aspect-[16/9] w-full rounded-2xl bg-gray-100 object-cover sm:aspect-[2/1] lg:aspect-[3/2]"
                />
                <div className="absolute inset-0 rounded-2xl ring-1 ring-inset ring-gray-900/10" />
              </div>
              <div className="max-w-xl">
                <div className="mt-8 flex items-center gap-x-4 text-xs">
                  <time dateTime={pet.category} className="text-gray-500">
                    {pet.category}
                  </time>
                </div>
                <div className="group relative">
                  <h3 className="mt-3 text-lg font-semibold leading-6 text-gray-900 group-hover:text-gray-600">
                    <a href={pet.href}>
                      <span className="absolute inset-0" />
                      {pet.name}
                    </a>
                  </h3>
                  <p className="mt-5 line-clamp-3 text-sm leading-6 text-gray-600">{pet.description}</p>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* Products Section */}
        <div className="mt-24">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl text-center">
            Pet Products
          </h2>
          
          {/* Filters */}
          <div className="mt-10 flex flex-col sm:flex-row gap-4">
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
                  placeholder="Search products..."
                />
              </div>
            </div>
            <div className="sm:w-48">
              <select
                value={selectedPetType}
                onChange={(e) => setSelectedPetType(e.target.value)}
                className="block w-full pl-3 pr-10 py-2 border border-gray-300 rounded-md leading-5 bg-white focus:outline-none focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              >
                <option value="">All Pets</option>
                {petTypes.map(type => (
                  <option key={type} value={type}>
                    {type.charAt(0).toUpperCase() + type.slice(1)}
                  </option>
                ))}
              </select>
            </div>
            <div className="sm:w-48">
              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="block w-full pl-3 pr-10 py-2 border border-gray-300 rounded-md leading-5 bg-white focus:outline-none focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              >
                <option value="">All Categories</option>
                {categories.map(category => (
                  <option key={category} value={category}>{category}</option>
                ))}
              </select>
            </div>
          </div>

          {/* Product Grid */}
          <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {filteredProducts.map((product) => (
              <PetProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}