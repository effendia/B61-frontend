import { Link } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

export default function Header() {
  const { isLoggedIn, logout } = useAuth();

  return (
    <header className="bg-gray-900 text-white px-6 py-4 flex justify-between items-center shadow-md">
      <h1 className="text-xl font-bold">🎥 Movie List</h1>
      <nav className="space-x-4">
        <Link to="/" className="hover:underline">Home</Link>
        {isLoggedIn && (
          <>
            <Link to="/favorites" className="hover:underline">Favorites</Link>
            <button onClick={logout} className="ml-4 text-sm bg-red-600 px-3 py-1 rounded hover:bg-red-700">
              Logout
            </button>
          </>
        )}
        {!isLoggedIn && (
          <Link to="/login" className="hover:underline">Login</Link>
        )}
      </nav>
    </header>
  );
}
