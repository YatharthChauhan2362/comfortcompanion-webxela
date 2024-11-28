import React from 'react';
import { MapPin, ShoppingBag, CreditCard, Store } from 'lucide-react';

export function WhereToBuyPage() {
  const buyingOptions = [
    {
      title: 'Find Local Retailers',
      description: 'Locate authorized pet stores in your area for in-person shopping experience.',
      icon: Store,
      action: 'Find Stores',
      href: '/stores'
    },
    {
      title: 'Online Shopping',
      description: 'Browse our selection of trusted online retailers for convenient shopping.',
      icon: ShoppingBag,
      action: 'Shop Online',
      href: '/online-stores'
    },
    {
      title: 'Veterinary Clinics',
      description: 'Purchase directly from verified veterinary clinics with expert guidance.',
      icon: MapPin,
      action: 'Find Clinics',
      href: '/clinics'
    },
    {
      title: 'Secure Payments',
      description: 'Multiple payment options available with secure transaction processing.',
      icon: CreditCard,
      action: 'Learn More',
      href: '/payments'
    }
  ];

  return (
    <div className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Where to Buy</h2>
          <p className="mt-2 text-lg leading-8 text-gray-600">
            Find the most convenient way to purchase pet supplies and accessories
          </p>
        </div>

        <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-6 sm:grid-cols-2 lg:max-w-none lg:grid-cols-2">
          {buyingOptions.map((option) => (
            <div
              key={option.title}
              className="flex flex-col rounded-lg bg-white shadow-lg transition-all hover:shadow-xl"
            >
              <div className="p-6">
                <option.icon className="h-8 w-8 text-indigo-600" />
                <h3 className="mt-4 text-xl font-semibold text-gray-900">{option.title}</h3>
                <p className="mt-2 text-gray-600">{option.description}</p>
                <a
                  href={option.href}
                  className="mt-4 inline-flex items-center text-sm font-semibold text-indigo-600 hover:text-indigo-500"
                >
                  {option.action} <span aria-hidden="true">→</span>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}