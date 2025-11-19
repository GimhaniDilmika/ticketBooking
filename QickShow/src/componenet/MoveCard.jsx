import React from 'react'
import { useNavigate } from 'react-router-dom'
import { StarIcon } from 'lucide-react'
import timeFormat from '../lib/timeFormat'

const MovieCard = ({ movie }) => {
  const navigate = useNavigate()

  return (
    <div
      className="flex flex-col justify-between p-3 bg-[#1b1b2f] rounded-2xl
                 hover:-translate-y-1 hover:shadow-lg transition duration-300 w-64 text-white"
    >
      {/* Movie Poster */}
      <img
        onClick={() => {
          navigate(`/movies/${movie._id}`)
          window.scrollTo(0, 0)
        }}
        src={movie.backdrop_path}
        alt={movie.title}
        className="rounded-lg h-64 w-full object-cover cursor-pointer"
      />

      {/* Movie Title */}
      <p className="font-semibold mt-3 truncate">{movie.title}</p>

      {/* Movie Info */}
      <p className="text-sm text-gray-400 mt-2">
        {new Date(movie.release_date).getFullYear()} •{' '}
        {movie.genres.slice(0, 2).map((genre) => genre.name).join(' | ')} •{' '}
        {timeFormat(movie.runtime)} min
      </p>

      {/* Rating + Button */}
      <div className="flex items-center justify-between mt-3">
        <button className="bg-red-500 hover:bg-red-600 text-white px-3 py-1 rounded-full text-sm">
          Buy Tickets
        </button>
        <div className="flex items-center gap-1 text-red-400">
          <StarIcon size={15} />
          <span className="text-sm">{movie.vote_average?.toFixed(1) || 'N/A'}</span>
        </div>
      </div>
    </div>
  )
}

export default MovieCard
