import { Pet } from '../types';

export const pets: Pet[] = [
  {
    name: 'Dogs',
    species: 'Canis lupus familiaris',
    category: 'Popular Pets',
    description: 'Loyal companions known for their devotion and varied breeds. Learn about different breeds, training tips, and care requirements.',
    image: 'https://images.unsplash.com/photo-1543466835-00a7907e9de1?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
    href: '/pets/dogs'
  },
  {
    name: 'Cats',
    species: 'Felis catus',
    category: 'Popular Pets',
    description: 'Independent and graceful pets that make perfect companions for any home. Discover breeds, behavior, and care guidelines.',
    image: 'https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
    href: '/pets/cats'
  },
  {
    name: 'Birds',
    species: 'Aves',
    category: 'Exotic Pets',
    description: 'Colorful and intelligent companions that bring song and life to your home. Learn about species, care, and training.',
    image: 'https://images.unsplash.com/photo-1452570053594-1b985d6ea890?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
    href: '/pets/birds'
  },
  {
    name: 'Fish',
    species: 'Various',
    category: 'Aquatic Pets',
    description: 'Peaceful and low-maintenance pets that create a calming atmosphere. Explore species, aquarium setup, and care requirements.',
    image: 'https://images.unsplash.com/photo-1524704654690-b56c05c78a00?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
    href: '/pets/fish'
  },
  {
    name: 'Small Mammals',
    species: 'Various',
    category: 'Small Pets',
    description: 'Perfect starter pets including hamsters, guinea pigs, and rabbits. Find care guides and housing requirements.',
    image: 'https://images.unsplash.com/photo-1591561582301-7ce6588cc286?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
    href: '/pets/small-mammals'
  },
  {
    name: 'Reptiles',
    species: 'Various',
    category: 'Exotic Pets',
    description: 'Fascinating creatures that make unique pets. Learn about different species, habitat setup, and specialized care needs.',
    image: 'https://images.unsplash.com/photo-1545529468-42764ef8c85f?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
    href: '/pets/reptiles'
  }
];