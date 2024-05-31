import React, { createContext, useState, useContext, ReactNode } from 'react';

interface AuthContextType {
  user: any; // Vous pouvez remplacer 'any' par un type plus spécifique
  login: (user: any) => void; // Remplacez 'any' par un type plus spécifique si possible
  logout: () => void;
}

interface AuthProviderProps {
  children: ReactNode;
}

const AuthContext = createContext<AuthContextType | null>(null);

export const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
  const [user, setUser] = useState<any>(null);

  const login = (user: any) => {
    setUser(user);
  };

  const logout = () => {
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = (): AuthContextType | null => {
  return useContext(AuthContext);
};
