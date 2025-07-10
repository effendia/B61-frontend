import { useAuth } from "../context/AuthContext";

export default function FavoritesPage() {
  const { favorites } = useAuth(); 

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Favorites</h1>
      {favorites.length === 0 ? (
        <p>No favorite movies yet.</p>
      ) : (
        <ul className="grid grid-cols-2 gap-4">
          {favorites.map((movie) => (
            <li key={movie.id} className="p-4 border rounded shadow">
              <h2 className="text-xl font-semibold">{movie.title}</h2>
              <p>{movie.description}</p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
