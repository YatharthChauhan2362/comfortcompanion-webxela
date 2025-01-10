import React from 'react';
import { PetHero } from '../../components/pets/PetHero';
import { PetCareGuide } from '../../components/pets/PetCareGuide';
import { PetBreedList } from '../../components/pets/PetBreedList';

const dogBreeds = [
  {
    name: 'Labrador Retriever',
    description: 'Friendly, outgoing, and high-spirited companions',
    image: 'https://images.unsplash.com/photo-1552053831-71594a27632d?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80',
    traits: ['Friendly', 'Active', 'Intelligent']
  },
  {
    name: 'German Shepherd',
    description: 'Confident, courageous, and smart working dogs',
    image: 'https://images.unsplash.com/photo-1589941013453-ec89f33b5e95?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80',
    traits: ['Loyal', 'Intelligent', 'Protective']
  },
  {
    name: 'Golden Retriever',
    description: 'Intelligent, friendly, and devoted sporting dogs',
    image: 'https://images.unsplash.com/photo-1633722715463-d30f4f325e24?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80',
    traits: ['Gentle', 'Smart', 'Friendly']
  }
];

const careGuides = [
  {
    title: 'Nutrition',
    content: 'High-quality dog food appropriate for age and size, fresh water always available'
  },
  {
    title: 'Exercise',
    content: 'Daily walks, play sessions, and mental stimulation activities'
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

export function DogPage() {
  return (
    <div className="bg-white">
      <PetHero
        title="Dogs"
        description="Man's best friend and loyal companion"
        image="https://images.unsplash.com/photo-1534361960057-19889db9621e?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
      />
      <PetBreedList breeds={dogBreeds} />
      <PetCareGuide guides={careGuides} />
    </div>
  );
}