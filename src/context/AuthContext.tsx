// src/context/AuthContext.tsx
import React, { createContext, useState, useContext, ReactNode, useEffect } from 'react';
import useUserStore from '@/store/UserStore'
import Axios from '@/api/Axios';
interface AuthContextType {
  isAuthenticated: boolean;
  login: (token: string) => void;
  logout: () => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);

  const {token, setUser} = useUserStore();
  useEffect(() => {
    const checkTokenValidity = async () => {
      if (!token) {
        setIsAuthenticated(false);
        return;
      }
      try {
        setIsAuthenticated(true);
        const response = await Axios.post('validate_login');

        if (response.status === 200) {
          setIsAuthenticated(true);
          const user = response.data.user;
          setUser(user, token);
        } else {
          throw new Error('Invalid token');
        }
      } catch (error) {
        console.error('Token validation failed:', error);
        logout(); // Clear invalid token
      }
    }
    checkTokenValidity();
  }, [token, setUser]);

  const login = (token: string) => {
    localStorage.setItem('authToken', token);
    setIsAuthenticated(true);
  };

  const logout = () => {
    localStorage.removeItem('authToken');
    setIsAuthenticated(false);
  };

  return (
    <AuthContext.Provider value={{ isAuthenticated, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};
