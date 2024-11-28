import { Heart, Home, Utensils, Stethoscope, Baby, Users } from 'lucide-react';
import type { LucideIcon } from 'lucide-react';

export interface Feature {
  name: string;
  description: string;
  icon: LucideIcon;
  href: string;
}

export const features: Feature[] = [
  {
    name: 'Preparing for Arrival',
    description: 'Get ready for your new family member with our comprehensive preparation guide.',
    icon: Heart,
    href: '/features/preparing-arrival'
  },
  {
    name: 'Welcoming Home',
    description: 'Make the transition smooth and comfortable for your new pet.',
    icon: Home,
    href: '/features/welcoming-home'
  },
  {
    name: 'Feeding Guide',
    description: 'Learn about proper nutrition and feeding schedules for optimal health.',
    icon: Utensils,
    href: '/features/feeding-guide'
  },
  {
    name: 'Healthcare',
    description: 'Find veterinary care and learn about common health concerns.',
    icon: Stethoscope,
    href: '/features/healthcare'
  },
  {
    name: 'Growth Stages',
    description: 'Understand the different stages of your pet development.',
    icon: Baby,
    href: '/features/growth-stages'
  },
  {
    name: 'Socialization',
    description: 'Tips and tricks for proper pet socialization and training.',
    icon: Users,
    href: '/features/socialization'
  },
];