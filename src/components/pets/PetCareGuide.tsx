import React from 'react';

interface CareGuide {
  title: string;
  content: string;
}

interface PetCareGuideProps {
  guides: CareGuide[];
}

export function PetCareGuide({ guides }: PetCareGuideProps) {
  return (
    <div className="bg-gray-50 py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Care Guide
          </h2>
          <p className="mt-2 text-lg leading-8 text-gray-600">
            Essential information for keeping your pet healthy and happy
          </p>
        </div>
        <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-8 sm:mt-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
          {guides.map((guide) => (
            <div
              key={guide.title}
              className="flex flex-col bg-white p-6 shadow-lg rounded-lg"
            >
              <h3 className="text-lg font-semibold text-gray-900">
                {guide.title}
              </h3>
              <p className="mt-2 text-gray-600">
                {guide.content}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}