export interface NavItem {
  title: string;
  href: string;
}

export interface Pet {
  name: string;
  species: string;
  category: string;
  description: string;
  image: string;
  href: string;
}

export interface PetProduct {
  id: string;
  name: string;
  description: string;
  price: number;
  image: string;
  category: string;
  petType: 'dog' | 'cat' | 'bird' | 'fish' | 'small-mammal' | 'reptile';
  stock: number;
}

export interface CartItem {
  product: PetProduct;
  quantity: number;
}

export interface Retailer {
  id: number;
  name: string;
  rating: number;
  address: string;
  hours: string;
  image: string;
  website?: string;
}

export interface OnlineStore {
  id: number;
  name: string;
  rating: number;
  description: string;
  shipping: string;
  payment: string;
  image: string;
  website: string;
}

export interface Veterinarian {
  id: number;
  name: string;
  specialization: string;
  rating: number;
  address: string;
  phone: string;
  hours: string;
  image: string;
}

export interface ServiceProvider {
  id: string;
  name: string;
  type: 'trainer' | 'groomer' | 'veterinarian';
  location: {
    state: string;
    city: string;
  };
  rating: number;
  image: string;
}