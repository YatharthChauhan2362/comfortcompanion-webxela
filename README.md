# Comfort Companion

A comprehensive pet care platform built with React, TypeScript, and Supabase.

## Features

- 🔐 User Authentication (Email/Password)
- 🛍️ Pet Product Shopping
- 🔍 Product Search and Filtering
- 🛒 Shopping Cart Management
- 💳 Secure Checkout Process
- 📍 Store Locator
- 🏥 Veterinarian Finder
- 🐾 Pet Care Resources

## Prerequisites

Before you begin, ensure you have the following installed:
- [Node.js](https://nodejs.org/) (v18 or higher)
- [npm](https://www.npmjs.com/) (v9 or higher)

## Getting Started

1. Clone the repository:
```bash
git clone <repository-url>
cd comfort-companion
```

2. Install dependencies:
```bash
npm install
```

3. Set up environment variables:
Create a `.env` file in the root directory with the following content:
```env
VITE_SUPABASE_URL=your_supabase_url
VITE_SUPABASE_ANON_KEY=your_supabase_anon_key
```

4. Start the development server:
```bash
npm run dev
```

The application will be available at `http://localhost:5173`

## Project Structure

```
comfort-companion/
├── src/
│   ├── components/     # Reusable UI components
│   ├── context/        # React context providers
│   ├── data/          # Static data and mock data
│   ├── hooks/         # Custom React hooks
│   ├── lib/           # Library configurations
│   ├── pages/         # Page components
│   ├── services/      # API and service functions
│   ├── store/         # State management (Zustand)
│   ├── types/         # TypeScript type definitions
│   └── utils/         # Utility functions
├── public/            # Static assets
└── supabase/         # Supabase migrations and configurations
```

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

## Database Setup

1. Create a new Supabase project at [supabase.com](https://supabase.com)

2. Run the migrations:
   - Navigate to your Supabase project's SQL editor
   - Copy and execute the contents of the migration files in the `supabase/migrations` directory in order

## Authentication

The application uses Supabase Authentication with email/password sign-in. Test accounts:

- Customer:
  - Email: customer@example.com
  - Password: password123

- Service Provider:
  - Email: provider@example.com
  - Password: password123

## Technologies Used

- [React](https://reactjs.org/)
- [TypeScript](https://www.typescriptlang.org/)
- [Vite](https://vitejs.dev/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Supabase](https://supabase.com/)
- [Zustand](https://github.com/pmndrs/zustand)
- [React Router](https://reactrouter.com/)
- [Lucide Icons](https://lucide.dev/)

## Contributing

1. Fork the repository
2. Create a new branch: `git checkout -b feature/your-feature-name`
3. Make your changes
4. Push to your fork: `git push origin feature/your-feature-name`
5. Create a pull request

## License

This project is licensed under the MIT License - see the LICENSE file for details.