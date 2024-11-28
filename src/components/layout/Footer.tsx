import React from 'react';

export function Footer() {
  return (
    <footer className="bg-white py-4 mt-auto">
      <div className="container mx-auto px-6 text-center text-gray-600 text-sm">
        Powered by{' '}
        <a 
          href="https://webxela.com" 
          target="_blank" 
          rel="noopener noreferrer"
          className="text-indigo-600 hover:text-indigo-500"
        >
          webxela.com
        </a>
      </div>
    </footer>
  );
}