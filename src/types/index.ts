export interface NavItem {
  title: string;
  href: string;
}

export interface Pet {
  name: string;
  species: string;
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