import  type { Movie } from "../types/movie";

type Props = {
  movie: Movie;
};

export default function MovieCard({ movie }: Props) {
  return (
    <div className="rounded-xl overflow-hidden shadow-lg bg-white">
      <img
        src={movie.posterUrl}
        alt={movie.title}
        className="w-full h-64 object-cover"
      />
      <div className="p-4">
        <h2 className="text-lg font-semibold">{movie.title}</h2>
        <p className="text-sm text-gray-500">Year: {movie.releaseYear}</p>
      </div>
    </div>
  );
}
