import React from 'react';

interface PetHeroProps {
  title: string;
  description: string;
  image: string;
}

export function PetHero({ title, description, image }: PetHeroProps) {
  return (
    <div className="relative">
      <div className="absolute inset-0">
        <img
          className="h-full w-full object-cover"
          src={image}
          alt={title}
        />
        <div className="absolute inset-0 bg-gray-900 opacity-60"></div>
      </div>
      <div className="relative max-w-7xl mx-auto py-24 px-4 sm:py-32 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-6xl">
          {title}
        </h1>
        <p className="mt-6 text-xl text-white max-w-3xl">
          {description}
        </p>
      </div>
    </div>
  );
}