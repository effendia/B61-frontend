// src/pages/Home.tsx
import { movies } from "../api/movies"

export default function Home() {
  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">🎬 Movie List</h1>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
        {movies.map((movie) => (
          <div key={movie.id} className="rounded-lg shadow-md overflow-hidden bg-white">
            <img src={movie.posterUrl} alt={movie.title} className="w-full h-64 object-cover" />
            <div className="p-4">
              <h2 className="font-semibold text-lg">{movie.title}</h2>
              <p className="text-gray-500">{movie.releaseYear}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
