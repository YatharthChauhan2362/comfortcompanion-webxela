import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { 
  Menu, 
  X, 
  PawPrint, 
  ChevronDown, 
  Store, 
  ShoppingBag, 
  Stethoscope, 
  Package, 
  LogOut,
  Home,
  Info,
  Phone,
  Heart
} from 'lucide-react';
import { useCartStore } from '../../store/cartStore';
import { useAuth } from '../../context/AuthContext';

export function Header() {
  const navigate = useNavigate();
  const { user, logout } = useAuth();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const cartItems = useCartStore(state => state.items);
  const cartItemCount = cartItems.reduce((total, item) => total + item.quantity, 0);

  const navigation = [
    { name: 'Home', href: '/', icon: Home },
    { name: 'About', href: '/about', icon: Info },
    { name: 'Contact', href: '/contact', icon: Phone },
    { name: 'Pets', href: '/pets', icon: Heart },
    { name: 'Shop', href: '/shop', icon: Store },
  ];

  const whereToBuyLinks = [
    { name: 'Find Retailers', href: '/find-retailers', icon: Store },
    { name: 'Online Stores', href: '/find-online-stores', icon: Package },
    { name: 'Find Vets', href: '/find-vets', icon: Stethoscope },
  ];

  const handleLogout = async () => {
    try {
      await logout();
      navigate('/login');
    } catch (error) {
      console.error('Logout failed:', error);
    }
  };

  return (
    <header className="bg-white shadow-sm">
      <nav className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8" aria-label="Top">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <div className="flex items-center">
            <Link to="/" className="flex items-center space-x-2">
              <PawPrint className="h-8 w-8 text-indigo-600" />
              <span className="text-xl font-bold text-gray-900">Comfort Companion</span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex md:items-center md:space-x-6">
            {navigation.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className="text-gray-500 hover:text-gray-900 flex items-center space-x-1"
              >
                <item.icon className="h-4 w-4" />
                <span>{item.name}</span>
              </Link>
            ))}

            {/* Where to Buy Dropdown */}
            <div className="relative group">
              <button className="text-gray-500 hover:text-gray-900 flex items-center space-x-1">
                <Store className="h-4 w-4" />
                <span>Where to Buy</span>
                <ChevronDown className="h-4 w-4" />
              </button>
              <div className="absolute z-10 hidden group-hover:block w-48 right-0 mt-2 origin-top-right bg-white border border-gray-200 divide-y divide-gray-100 rounded-md shadow-lg">
                {whereToBuyLinks.map((link) => (
                  <Link
                    key={link.name}
                    to={link.href}
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 flex items-center space-x-2"
                  >
                    <link.icon className="h-4 w-4" />
                    <span>{link.name}</span>
                  </Link>
                ))}
              </div>
            </div>

            {/* Cart */}
            <Link to="/cart" className="relative">
              <ShoppingBag className="h-6 w-6 text-gray-500 hover:text-gray-900" />
              {cartItemCount > 0 && (
                <span className="absolute -top-2 -right-2 bg-indigo-600 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                  {cartItemCount}
                </span>
              )}
            </Link>

            {/* Logout Button */}
            <button
              onClick={handleLogout}
              className="inline-flex items-center justify-center rounded-md bg-indigo-600 px-4 py-2 text-sm font-medium text-white hover:bg-indigo-700"
            >
              <LogOut className="h-4 w-4 mr-2" />
              Log Out
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100"
            >
              {mobileMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        {mobileMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50 flex items-center space-x-2"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  <item.icon className="h-4 w-4" />
                  <span>{item.name}</span>
                </Link>
              ))}
              {whereToBuyLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.href}
                  className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50 flex items-center space-x-2"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  <link.icon className="h-4 w-4" />
                  <span>{link.name}</span>
                </Link>
              ))}
              <button
                onClick={handleLogout}
                className="w-full mt-4 flex items-center justify-center px-4 py-2 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700"
              >
                <LogOut className="h-4 w-4 mr-2" />
                Log Out
              </button>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}