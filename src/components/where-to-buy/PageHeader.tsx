import React from 'react';

interface PageHeaderProps {
  title: string;
  description: string;
}

export function PageHeader({ title, description }: PageHeaderProps) {
  return (
    <div className="text-center">
      <h1 className="text-3xl font-bold text-gray-900 sm:text-4xl">{title}</h1>
      <p className="mt-3 max-w-2xl mx-auto text-xl text-gray-500 sm:mt-4">
        {description}
      </p>
    </div>
  );
}