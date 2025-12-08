import React from "react";
import { useNavigate } from "react-router-dom";
import { StarIcon } from "lucide-react";
import { timeFormat } from "../lib/timeFormat";


const MovieCard = ({ movie }) => {
  const navigate = useNavigate();
  if (!movie) return null;

  const year = movie.release_date
    ? new Date(movie.release_date).getFullYear()
    : "";

  const genresText = Array.isArray(movie.genres)
    ? movie.genres.slice(0, 2).map((g) => g.name).join(" | ")
    : "";

  const duration = movie.runtime ? timeFormat(movie.runtime) : "";

  const rating = typeof movie.vote_average === "number"
    ? movie.vote_average.toFixed(1)
    : "N/A";

  return (
    <div
      className="flex flex-col justify-between p-3 bg-[#1b1b2f] rounded-2xl
                 hover:-translate-y-1 hover:shadow-lg transition duration-300 w-64 text-white"
    >
      {/* Poster */}
      <img
        onClick={() => {
          navigate(`/movies/${movie._id || movie.id}`);
          window.scrollTo(0, 0);
        }}
        src={movie.backdrop_path}
        alt={movie.title}
        className="rounded-lg h-64 w-full object-cover cursor-pointer"
      />

      {/* Title */}
      <p className="font-semibold mt-3 truncate">{movie.title}</p>

      {/* Info line: 2025 · Action | Fantasy · 1h 42m */}
      <p className="text-sm text-gray-400 mt-2">
        {year && `${year} · `}
        {genresText && `${genresText} · `}
        {duration}
      </p>

      {/* Rating + Button */}
      <div className="flex items-center justify-between mt-3">
        <button className="bg-red-500 hover:bg-red-600 text-white px-3 py-1 rounded-full text-sm">
          Buy Tickets
        </button>

        <div className="flex items-center gap-1 text-red-400">
          <StarIcon size={15} />
          <span className="text-sm">{rating}</span>
        </div>
      </div>
    </div>
  );
};

export default MovieCard;
