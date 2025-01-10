import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { AuthProvider, useAuth } from './context/AuthContext';
import { ErrorBoundary } from './components/ErrorBoundary';
import { Header } from './components/layout/Header';
import { Footer } from './components/layout/Footer';
import { HomePage } from './pages/HomePage';
import { AboutPage } from './pages/AboutPage';
import { ContactPage } from './pages/ContactPage';
import { LoginPage } from './pages/LoginPage';
import { RegisterPage } from './pages/RegisterPage';
import { PetsPage } from './pages/PetsPage';
import { DogPage } from './pages/pets/DogPage';
import { CatPage } from './pages/pets/CatPage';
import { ShopPage } from './pages/ShopPage';
import { CartPage } from './pages/CartPage';
import { CheckoutPage } from './pages/CheckoutPage';
import { WhereToBuyPage } from './pages/WhereToBuyPage';
import { FindRetailersPage } from './pages/FindRetailersPage';
import { FindOnlineStoresPage } from './pages/FindOnlineStoresPage';
import { FindVetsPage } from './pages/FindVetsPage';
import { FeaturesPage } from './pages/FeaturesPage';

function PrivateRoute({ children }: { children: React.ReactNode }) {
  const { user, loading } = useAuth();

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-indigo-600"></div>
      </div>
    );
  }

  if (!user) {
    return <Navigate to="/login" />;
  }

  return <>{children}</>;
}

function PublicRoute({ children }: { children: React.ReactNode }) {
  const { user } = useAuth();

  if (user) {
    return <Navigate to="/" />;
  }

  return <>{children}</>;
}

export function App() {
  return (
    <ErrorBoundary>
      <AuthProvider>
        <Router>
          <div className="min-h-screen bg-white flex flex-col">
            <Routes>
              {/* Public routes */}
              <Route
                path="/login"
                element={
                  <PublicRoute>
                    <LoginPage />
                  </PublicRoute>
                }
              />
              <Route
                path="/register"
                element={
                  <PublicRoute>
                    <RegisterPage />
                  </PublicRoute>
                }
              />

              {/* Protected routes */}
              <Route
                path="/*"
                element={
                  <PrivateRoute>
                    <div className="flex flex-col min-h-screen">
                      <Header />
                      <main className="flex-grow">
                        <Routes>
                          <Route path="/" element={<HomePage />} />
                          <Route path="/about" element={<AboutPage />} />
                          <Route path="/contact" element={<ContactPage />} />
                          <Route path="/pets" element={<PetsPage />} />
                          <Route path="/pets/dogs" element={<DogPage />} />
                          <Route path="/pets/cats" element={<CatPage />} />
                          <Route path="/shop" element={<ShopPage />} />
                          <Route path="/cart" element={<CartPage />} />
                          <Route path="/checkout" element={<CheckoutPage />} />
                          <Route path="/where-to-buy" element={<WhereToBuyPage />} />
                          <Route path="/find-retailers" element={<FindRetailersPage />} />
                          <Route path="/find-online-stores" element={<FindOnlineStoresPage />} />
                          <Route path="/find-vets" element={<FindVetsPage />} />
                          <Route path="/features" element={<FeaturesPage />} />
                        </Routes>
                      </main>
                      <Footer />
                    </div>
                  </PrivateRoute>
                }
              />
            </Routes>
          </div>
        </Router>
      </AuthProvider>
    </ErrorBoundary>
  );
}

export default App;