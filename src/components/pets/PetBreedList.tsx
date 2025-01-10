import React from 'react';

interface Breed {
  name: string;
  description: string;
  image: string;
  traits: string[];
}

interface PetBreedListProps {
  breeds: Breed[];
}

export function PetBreedList({ breeds }: PetBreedListProps) {
  return (
    <div className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Popular Breeds
          </h2>
          <p className="mt-2 text-lg leading-8 text-gray-600">
            Discover the perfect breed for your lifestyle
          </p>
        </div>
        <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-3">
          {breeds.map((breed) => (
            <article key={breed.name} className="flex flex-col items-start">
              <div className="relative w-full">
                <img
                  src={breed.image}
                  alt={breed.name}
                  className="aspect-[16/9] w-full rounded-2xl bg-gray-100 object-cover sm:aspect-[2/1] lg:aspect-[3/2]"
                />
              </div>
              <div className="max-w-xl">
                <div className="mt-8 flex flex-wrap gap-2">
                  {breed.traits.map((trait) => (
                    <span
                      key={trait}
                      className="inline-flex items-center px-3 py-0.5 rounded-full text-sm font-medium bg-indigo-100 text-indigo-800"
                    >
                      {trait}
                    </span>
                  ))}
                </div>
                <h3 className="mt-4 text-lg font-semibold leading-6 text-gray-900">
                  {breed.name}
                </h3>
                <p className="mt-2 text-sm leading-6 text-gray-600">
                  {breed.description}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
}