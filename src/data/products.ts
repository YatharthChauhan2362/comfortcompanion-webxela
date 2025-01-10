import { Product } from '../types';

export const products: Product[] = [
  {
    id: '1',
    name: 'Premium Dog Food',
    description: 'High-quality, nutritious dog food for all breeds',
    price: 49.99,
    image: 'https://images.unsplash.com/photo-1568640347023-a616a30bc3bd?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
    category: 'Dog Food',
    stock: 100
  },
  {
    id: '2',
    name: 'Cat Scratching Post',
    description: 'Durable scratching post with platforms',
    price: 39.99,
    image: 'https://images.unsplash.com/photo-1545249390-6bdfa286032f?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
    category: 'Cat Supplies',
    stock: 50
  },
  {
    id: '3',
    name: 'Pet Carrier',
    description: 'Comfortable and secure pet carrier for travel',
    price: 34.99,
    image: 'https://images.unsplash.com/photo-1596492784531-6e6eb5ea9993?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
    category: 'Travel',
    stock: 30
  },
  {
    id: '4',
    name: 'Interactive Pet Toy',
    description: 'Engaging toy for mental stimulation',
    price: 19.99,
    image: 'https://images.unsplash.com/photo-1576201836106-db1758fd1c97?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
    category: 'Toys',
    stock: 200
  },
  {
    id: '5',
    name: 'Pet Grooming Kit',
    description: 'Complete grooming set for pets',
    price: 44.99,
    image: 'https://images.unsplash.com/photo-1516734212186-a967f81ad0d7?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
    category: 'Grooming',
    stock: 75
  }
];