import type { Movie } from "@/types/movie";

export type AuthContextType = {
  isLoggedIn: boolean;
  login: (token: string, username: string) => void;
  logout: () => void; // ✅ Tambahkan logout
  favorites: Movie[];
};
