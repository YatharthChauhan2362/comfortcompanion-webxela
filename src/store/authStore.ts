import { create } from 'zustand';
import { login as apiLogin, register as apiRegister } from '../services/api';

interface AuthState {
  user: any | null;
  isAuthenticated: boolean;
  login: (email: string, password: string) => Promise<void>;
  register: (userData: any) => Promise<void>;
  logout: () => void;
}

export const useAuthStore = create<AuthState>((set) => ({
  user: null,
  isAuthenticated: false,

  login: async (email: string, password: string) => {
    try {
      const { user, token } = await apiLogin(email, password);
      localStorage.setItem('token', token);
      set({ user, isAuthenticated: true });
    } catch (error) {
      throw error;
    }
  },

  register: async (userData: any) => {
    try {
      const { user, token } = await apiRegister(userData);
      localStorage.setItem('token', token);
      set({ user, isAuthenticated: true });
    } catch (error) {
      throw error;
    }
  },

  logout: () => {
    localStorage.removeItem('token');
    set({ user: null, isAuthenticated: false });
  }
}));