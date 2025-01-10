import { PetProduct } from '../types';

export const petProducts: PetProduct[] = [
  // Dog Products
  {
    id: 'dog-food-1',
    name: 'Premium Dog Food',
    description: 'High-quality, grain-free dog food for all breeds',
    price: 49.99,
    category: 'Dog Food',
    petType: 'dog',
    image: 'https://images.unsplash.com/photo-1568640347023-a616a30bc3bd?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
    stock: 100
  },
  {
    id: 'dog-toy-1',
    name: 'Interactive Dog Toy',
    description: 'Durable chew toy that keeps dogs entertained',
    price: 14.99,
    category: 'Dog Toys',
    petType: 'dog',
    image: 'https://images.unsplash.com/photo-1576201836106-db1758fd1c97?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
    stock: 150
  },
  // Cat Products
  {
    id: 'cat-food-1',
    name: 'Gourmet Cat Food',
    description: 'Premium wet food for discerning cats',
    price: 34.99,
    category: 'Cat Food',
    petType: 'cat',
    image: 'https://images.unsplash.com/photo-1589924691995-400dc9ecc119?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
    stock: 80
  },
  {
    id: 'cat-tree-1',
    name: 'Luxury Cat Tree',
    description: 'Multi-level cat tree with scratching posts',
    price: 89.99,
    category: 'Cat Furniture',
    petType: 'cat',
    image: 'https://images.unsplash.com/photo-1545249390-6bdfa286032f?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
    stock: 30
  },
  // Bird Products
  {
    id: 'bird-cage-1',
    name: 'Deluxe Bird Cage',
    description: 'Spacious cage with multiple perches',
    price: 129.99,
    category: 'Bird Supplies',
    petType: 'bird',
    image: 'https://images.unsplash.com/photo-1520808663317-647b476a81b9?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
    stock: 20
  },
  // Fish Products
  {
    id: 'aquarium-1',
    name: 'Smart Aquarium Kit',
    description: 'Complete aquarium setup with LED lighting',
    price: 199.99,
    category: 'Fish Supplies',
    petType: 'fish',
    image: 'https://images.unsplash.com/photo-1522069169874-c58ec4b76be5?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
    stock: 15
  }
];