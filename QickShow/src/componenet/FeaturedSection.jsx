import React from 'react'
import { useNavigate } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'
import BlurCircle from './BlurCircle'
import MovieCard from './MoveCard'

const FeaturedSection = () => {
  const navigate = useNavigate()

  // Temporary demo data (replace with your fetched API movies)
  const movies = [
    {
      _id: 1,
      title: 'In the Lost Lands',
      release_date: '2025-05-12',
      genres: [{ name: 'Action' }, { name: 'Fantasy' }],
      runtime: 102,
      vote_average: 6.4,
      backdrop_path: '/images/lostlands.jpg',
    },
    {
      _id: 2,
      title: 'Until Dawn',
      release_date: '2025-06-20',
      genres: [{ name: 'Horror' }, { name: 'Mystery' }],
      runtime: 103,
      vote_average: 6.4,
      backdrop_path: '/images/untildawn.jpg',
    },
    {
      _id: 3,
      title: 'Lilo & Stitch',
      release_date: '2025-04-15',
      genres: [{ name: 'Family' }, { name: 'Comedy' }],
      runtime: 108,
      vote_average: 7.1,
      backdrop_path: '/images/lilo.jpg',
    },
    {
      _id: 4,
      title: 'Havoc',
      release_date: '2025-07-01',
      genres: [{ name: 'Action' }, { name: 'Crime' }],
      runtime: 107,
      vote_average: 6.5,
      backdrop_path: '/images/havoc.jpg',
    },
  ]

  return (
    <div className="px-6 md:px-16 lg:px-24 xl:px-44 overflow-hidden text-white">
      {/* Header Section */}
      <div className="relative flex items-center justify-between pt-20 pb-10">
        <BlurCircle top="0" right="-80px" />
        <p className="text-gray-300 font-medium text-lg">Now Showing</p>
        <button
          onClick={() => navigate('/movies')}
          className="group flex items-center gap-2 text-sm text-gray-300 hover:text-white transition"
        >
          View All
          <ArrowRight className="group-hover:translate-x-0.5 transition w-4 h-4" />
        </button>
      </div>

      {/* Movie Cards Section */}
      <div className="flex flex-wrap gap-6 justify-center sm:justify-start">
        {movies.map((movie) => (
          <MovieCard key={movie._id} movie={movie} />
        ))}
      </div>

      {/* Show More Button */}
      <div className="flex justify-center mt-12">
        <button
          onClick={() => {
            navigate('/movies')
            window.scrollTo(0, 0)
          }}
          className="px-10 py-3 text-sm bg-red-600 hover:bg-red-700 rounded-md font-medium transition"
        >
          Show More
        </button>
      </div>
    </div>
  )
}

export default FeaturedSection
