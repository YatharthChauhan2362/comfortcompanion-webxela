import React from 'react';
import { UserPlus } from 'lucide-react';

interface RegistrationFormProps {
  formData: {
    name: string;
    email: string;
    password: string;
    confirmPassword: string;
  };
  isServiceProvider: boolean;
  isLoading: boolean;
  error: string;
  onSubmit: (e: React.FormEvent) => void;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onToggleRole: (isProvider: boolean) => void;
}

export function RegistrationForm({
  formData,
  isServiceProvider,
  isLoading,
  error,
  onSubmit,
  onChange,
  onToggleRole
}: RegistrationFormProps) {
  return (
    <form className="space-y-6" onSubmit={onSubmit}>
      {error && (
        <div className="p-3 text-sm text-red-600 bg-red-50 rounded-md">
          {error}
        </div>
      )}

      <div className="flex justify-center space-x-4 mb-8">
        <button
          type="button"
          onClick={() => onToggleRole(false)}
          className={`px-4 py-2 rounded-md ${
            !isServiceProvider
              ? 'bg-indigo-600 text-white'
              : 'bg-gray-100 text-gray-900'
          }`}
        >
          Customer
        </button>
        <button
          type="button"
          onClick={() => onToggleRole(true)}
          className={`px-4 py-2 rounded-md ${
            isServiceProvider
              ? 'bg-indigo-600 text-white'
              : 'bg-gray-100 text-gray-900'
          }`}
        >
          Service Provider
        </button>
      </div>

      <div>
        <label htmlFor="name" className="block text-sm font-medium text-gray-700">
          Full Name
        </label>
        <input
          id="name"
          name="name"
          type="text"
          required
          value={formData.name}
          onChange={onChange}
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
        />
      </div>

      <div>
        <label htmlFor="email" className="block text-sm font-medium text-gray-700">
          Email
        </label>
        <input
          id="email"
          name="email"
          type="email"
          required
          value={formData.email}
          onChange={onChange}
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
        />
      </div>

      <div>
        <label htmlFor="password" className="block text-sm font-medium text-gray-700">
          Password
        </label>
        <input
          id="password"
          name="password"
          type="password"
          required
          value={formData.password}
          onChange={onChange}
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
        />
      </div>

      <div>
        <label htmlFor="confirmPassword" className="block text-sm font-medium text-gray-700">
          Confirm Password
        </label>
        <input
          id="confirmPassword"
          name="confirmPassword"
          type="password"
          required
          value={formData.confirmPassword}
          onChange={onChange}
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
        />
      </div>

      <button
        type="submit"
        disabled={isLoading}
        className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 disabled:opacity-50"
      >
        {isLoading ? 'Creating Account...' : 'Create Account'}
      </button>
    </form>
  );
}