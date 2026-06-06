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
    const parts = dateTimeInput.split("T")
    if (parts.length < 2) return
    const [date, time] = parts
    if (!date || !time) return

    setDateTimeSelection((prev) => {
      const times = prev[date] || []
      if (!times.includes(time)) {
        return { ...prev, [date]: [...times, time] }
      }
      return prev
    })

    setDateTimeInput("")
  }

  const handleRemoveTime = (date, time) => {
    setDateTimeSelection((prev) => {
      const filteredTimes = prev[date].filter((t) => t !== time)
      if (filteredTimes.length === 0) {
        const { [date]: _, ...rest } = prev
        return rest
      }
      return { ...prev, [date]: filteredTimes }
    })
  }

  return nowPlayingMovies.length > 0 ? (
    <>
      <h1 className="text-2xl font-bold mb-6">
        Add <span className="text-primary">Shows</span>
      </h1>

      <p className="mt-6 text-lg font-medium">Now Playing Movies</p>
      <div className="overflow-x-auto pb-4">
        <div className="flex gap-4 mt-4 w-max">
          {nowPlayingMovies.map((movie) => (
            <div
              key={movie.id}
              onClick={() => setSelectedMovie(movie.id)}
              className={`relative w-36 cursor-pointer hover:-translate-y-1 transition duration-300`}
            >
              <div className="relative rounded-lg overflow-hidden w-36 h-52">
                <img
                  src={movie.backdrop_path}
                  alt={movie.title}
                  className="w-full h-full object-cover brightness-90"
                />
                <div className="absolute bottom-0 left-0 w-full flex items-center justify-between px-2 py-1.5 bg-black/70 text-xs">
                  <span className="flex items-center gap-1 text-gray-300">
                    <StarIcon className="w-3 h-3 text-primary fill-primary" />
                    {movie.vote_average.toFixed(1)}
                  </span>
                  <span className="text-gray-400">
                    {movie.genres?.[0]?.name || 'Movie'}
                  </span>
                </div>
                {selectedMovie === movie.id && (
                  <div className="absolute inset-0 border-2 border-primary rounded-lg pointer-events-none" />
                )}
              </div>
              <div className="mt-1.5 px-0.5">
                <p className="font-medium text-sm truncate">{movie.title}</p>
                <p className="text-gray-400 text-xs mt-0.5">{movie.release_date}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Show Price Input */}
      <div className="mt-8">
        <label className="block text-sm font-medium mb-2">Show Price</label>
        <div className="inline-flex items-center gap-2 border border-gray-600 px-3 py-2 rounded-md">
          <p className="text-gray-400 text-sm">{currency}</p>
          <input
            min={0}
            type="number"
            value={showPrice}
            onChange={(e) => setShowPrice(e.target.value)}
            placeholder="Enter show price"
            className="outline-none bg-transparent text-white"
          />
        </div>
      </div>

      {/* Date & Time Selection */}
      <div className="mt-6">
        <label className="block text-sm font-medium mb-2">Select Date and Time</label>
        <div className="inline-flex gap-3 border border-gray-600 p-1 pl-3 rounded-lg items-center">
          <input
            type="datetime-local"
            value={dateTimeInput}
            onChange={(e) => setDateTimeInput(e.target.value)}
            className="outline-none rounded-md bg-transparent text-white text-sm datetime-input"
          />
          <button
            type="button"
            onClick={handleDateTimeAdd}
            className="bg-primary/80 text-white px-4 py-2 text-sm rounded-lg hover:bg-primary cursor-pointer transition"
          >
            Add Time
          </button>
        </div>
      </div>

      {/* Selected DateTimes Display */}
      {Object.keys(dateTimeSelection).length > 0 && (
        <div className="mt-6 max-w-lg">
          {Object.entries(dateTimeSelection).map(([date, times]) => (
            <div key={date} className="mb-4">
              <p className="text-sm font-medium text-gray-300 mb-2">{date}</p>
              <div className="flex flex-wrap gap-2">
                {times.map((time) => (
                  <span
                    key={time}
                    className="flex items-center gap-2 bg-primary/10 border border-primary/30 text-sm px-3 py-1 rounded-full"
                  >
                    {time}
                    <button
                      type="button"
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
          type="button"
          className="mt-8 bg-primary text-white px-6 py-2.5 rounded-lg hover:bg-primary/80 cursor-pointer transition"
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