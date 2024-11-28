import React from 'react';
import { Code, Database, Palette, Users } from 'lucide-react';

export function AboutPage() {
  const team = [
    {
      name: 'Shivam Mishra',
      role: 'Frontend Developer',
      image: 'https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
      icon: Code
    },
    {
      name: 'Shivam Singh',
      role: 'Backend Developer',
      image: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
      icon: Database
    },
    {
      name: 'Shashawat Singh',
      role: 'Database Specialist',
      image: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
      icon: Users
    },
    {
      name: 'Shreya Kasaudhan',
      role: 'Framework and Design',
      image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
      icon: Palette
    }
  ];

  return (
    <div className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">About Us</h2>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            Comfort Companion is dedicated to helping pet owners provide the best care for their beloved animals.
            Our platform offers comprehensive resources, expert guidance, and a supportive community.
          </p>
        </div>

        <div className="mx-auto mt-20 max-w-2xl lg:max-w-none">
          <h3 className="text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl mb-12 text-center">
            Meet Our Team
          </h3>
          <div className="grid grid-cols-1 gap-x-8 gap-y-10 sm:grid-cols-2 lg:grid-cols-4">
            {team.map((member) => (
              <div key={member.name} className="text-center">
                <div className="relative mx-auto h-40 w-40 rounded-full overflow-hidden">
                  <img
                    className="h-full w-full object-cover"
                    src={member.image}
                    alt={member.name}
                  />
                </div>
                <h3 className="mt-6 text-base font-semibold leading-7 tracking-tight text-gray-900">
                  {member.name}
                </h3>
                <p className="text-sm leading-6 text-gray-600">{member.role}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}