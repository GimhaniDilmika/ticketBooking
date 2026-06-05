import React, { useState, useEffect } from 'react'
import { dummyTrailers } from '../../lib/dummyTrailers'
import { StarIcon } from 'lucide-react'

const AddShows = () => {
  const currency = import.meta.env.VITE_CURRENCY

  const [nowPlayingMovies, setNowPlayingMovies] = useState([])
  const [selectedMovie, setSelectedMovie] = useState(null)
  const [dateTimeSelection, setDateTimeSelection] = useState({})
  const [dateTimeInput, setDateTimeInput] = useState("")
  const [showPrice, setShowPrice] = useState("")

  const fetchNowPlayingMovies = async () => {
    setNowPlayingMovies(dummyTrailers)
  }

  useEffect(() => {
    fetchNowPlayingMovies()
  }, [])

  const handleDateTimeAdd = () => {
    if (!dateTimeInput) return
    const [date, time] = dateTimeInput.split("T")
    if (!date || !time) return

    setDateTimeSelection((prev) => {
      const times = prev[date] || []
      if (!times.includes(time)) {
        return { ...prev, [date]: [...times, time] }
      }
      return prev
    })
  }

  const handleRemoveTime = (date, time) => {
    setDateTimeSelection((prev) => {
      const filteredTimes = prev[date].filter((t) => t !== time)
      if (filteredTimes.length === 0) {
        const { [date]: _, ...rest } = prev
        return rest
      }
      return {
        ...prev,
        [date]: filteredTimes,
      }
    })
  }

  return nowPlayingMovies.length > 0 ? (
    <>
      <h1 className="text-2xl font-bold mb-6">
        Add <span className="text-primary">Shows</span>
      </h1>

      {/* Now Playing Movies */}
      <p className="mt-10 text-lg font-medium">Now Playing Movies</p>
      <div className="overflow-x-auto pb-4">
        <div className="group flex flex-wrap gap-4 mt-4 w-max">
          {nowPlayingMovies.map((movie) => (
            <div
              key={movie.id}
              className={`relative max-w-40 cursor-pointer
                group-hover:not-hover:opacity-40 hover:-translate-y-1
                transition duration-300`}
              onClick={() => setSelectedMovie(movie.id)}
            >
              <div className="relative rounded-lg overflow-hidden">
                <img
                  src={movie.backdrop_path}
                  alt=""
                  className="w-full object-cover brightness-90"
                />
                <div className="text-sm flex items-center justify-between
                  p-2 bg-black/70 w-full absolute bottom-0 left-0">
                  <p className="flex items-center gap-1 text-gray-400">
                    <StarIcon className="w-4 h-4 text-primary fill-primary" />
                    {movie.vote_average.toFixed(1)}
                  </p>
                  <p className="text-gray-300 text-sm">
                    {movie.vote_count}k Votes
                  </p>
                </div>
              </div>
              <div>
                <p className="font-medium truncate mt-1">{movie.title}</p>
                <p className="text-gray-400 text-sm">{movie.release_date}</p>
              </div>

              {/* Selected indicator */}
              {selectedMovie === movie.id && (
                <div className="absolute inset-0 border-2 border-primary
                  rounded-lg pointer-events-none" />
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Show Price Input */}
      <div className="mt-8">
        <label className="block text-sm font-medium mb-2">Show Price</label>
        <div className="inline-flex items-center gap-2 border
          border-gray-600 px-3 py-2 rounded-md">
          <p className="text-gray-400 text-sm">{currency}</p>
          <input
            min={0}
            type="number"
            value={showPrice}
            onChange={(e) => setShowPrice(e.target.value)}
            placeholder="Enter show price"
            className="outline-none bg-transparent"
          />
        </div>
      </div>

      {/* Date & Time Selection */}
      <div className="mt-6">
        <label className="block text-sm font-medium mb-2">
          Select Date and Time
        </label>
        <div className="inline-flex gap-5 border border-gray-600
          p-1 pl-3 rounded-lg">
          <input
            type="datetime-local"
            value={dateTimeInput}
            onChange={(e) => setDateTimeInput(e.target.value)}
            className="outline-none rounded-md bg-transparent"
          />
          <button
            onClick={handleDateTimeAdd}
            className="bg-primary/80 text-white px-3 py-2 text-sm
              rounded-lg hover:bg-primary cursor-pointer"
          >
            Add Time
          </button>
        </div>
      </div>

      {/* Selected Date Times Display */}
      {Object.keys(dateTimeSelection).length > 0 && (
        <div className="mt-6 max-w-lg">
          {Object.entries(dateTimeSelection).map(([date, times]) => (
            <div key={date} className="mb-4">
              <p className="text-sm font-medium text-gray-300 mb-2">{date}</p>
              <div className="flex flex-wrap gap-2">
                {times.map((time) => (
                  <span
                    key={time}
                    className="flex items-center gap-2 bg-primary/10
                      border border-primary/30 text-sm px-3 py-1 rounded-full"
                  >
                    {time}
                    <button
                      onClick={() => handleRemoveTime(date, time)}
                      className="text-gray-400 hover:text-red-400 text-xs"
                    >
                      ✕
                    </button>
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Submit Button */}
      {selectedMovie && showPrice && Object.keys(dateTimeSelection).length > 0 && (
        <button
          className="mt-8 bg-primary text-white px-6 py-2.5
            rounded-lg hover:bg-primary/80 cursor-pointer transition"
        >
          Add Show
        </button>
      )}
    </>
  ) : (
    <p className="text-gray-400 animate-pulse">Loading...</p>
  )
}

export default AddShows