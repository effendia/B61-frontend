import { createContext, useContext, useState } from "react";
import type { AuthContextType } from "../types/auth";
import type { Movie } from "../types/movie";

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [favorites, setFavorites] = useState<Movie[]>([]);

  const login = (token: string, username: string) => {
    localStorage.setItem("token", token);
    localStorage.setItem("username", username);
    setIsLoggedIn(true);
  };

  const logout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("username");
    setIsLoggedIn(false);
  };

  return (
    <AuthContext.Provider value={{ isLoggedIn, login, logout, favorites }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) throw new Error("useAuth must be used within AuthProvider");
  return context;
};
