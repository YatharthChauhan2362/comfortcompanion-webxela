import React from 'react';
import { PetHero } from '../../components/pets/PetHero';
import { PetCareGuide } from '../../components/pets/PetCareGuide';
import { PetBreedList } from '../../components/pets/PetBreedList';

const catBreeds = [
  {
    name: 'Persian',
    description: 'Sweet, gentle cats with long, luxurious coats',
    image: 'https://images.unsplash.com/photo-1617642171292-fc0229898d61?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80',
    traits: ['Gentle', 'Quiet', 'Affectionate']
  },
  {
    name: 'Siamese',
    description: 'Intelligent, social, and vocal cats',
    image: 'https://images.unsplash.com/photo-1513245543132-31f507417b26?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80',
    traits: ['Active', 'Vocal', 'Social']
  },
  {
    name: 'Maine Coon',
    description: 'Large, gentle giants with luxurious coats',
    image: 'https://images.unsplash.com/photo-1589883661923-6476cb0ae9f2?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80',
    traits: ['Large', 'Gentle', 'Friendly']
  }
];

const careGuides = [
  {
    title: 'Nutrition',
    content: 'High-quality cat food, fresh water, and occasional treats'
  },
  {
    title: 'Environment',
    content: 'Clean litter box, scratching posts, and comfortable resting spots'
  },
  {
    title: 'Grooming',
    content: 'Regular brushing, nail trimming, and dental care'
  },
  {
    title: 'Health',
    content: 'Regular vet check-ups, vaccinations, and preventive care'
  }
];

export function CatPage() {
  return (
    <div className="bg-white">
      <PetHero
        title="Cats"
        description="Independent and charming companions"
        image="https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
      />
      <PetBreedList breeds={catBreeds} />
      <PetCareGuide guides={careGuides} />
    </div>
  );
}