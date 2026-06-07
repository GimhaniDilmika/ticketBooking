import React, { useEffect, useRef, useState } from 'react'
import { dummyTrailers } from '../../lib/dummyTrailers'
import { CalendarIcon, CheckIcon, StarIcon, Trash2Icon } from 'lucide-react'

const AddShows = () => {
  const currency = import.meta.env.VITE_CURRENCY || '$'

  const [nowPlayingMovies, setNowPlayingMovies] = useState([])
  const [selectedMovie, setSelectedMovie] = useState(null)
  const [dateTimeSelection, setDateTimeSelection] = useState({})
  const [dateTimeInput, setDateTimeInput] = useState('')
  const [showPrice, setShowPrice] = useState('')

  const dateTimeRef = useRef(null)

  const fetchNowPlayingMovies = async () => {
    setNowPlayingMovies(dummyTrailers)
  }

  useEffect(() => {
    fetchNowPlayingMovies()
  }, [])

  const openDateTimePicker = () => {
    if (dateTimeRef.current?.showPicker) {
      dateTimeRef.current.showPicker()
    } else {
      dateTimeRef.current?.focus()
    }
  }

  const handleDateTimeAdd = () => {
    if (!dateTimeInput) {
      alert('Please select date and time')
      return
    }

    const [date, time] = dateTimeInput.split('T')

    if (!date || !time) {
      alert('Invalid date or time')
      return
    }

    setDateTimeSelection((prev) => {
      const existingTimes = prev[date] || []

      if (existingTimes.includes(time)) {
        alert('This time is already added')
        return prev
      }

      return {
        ...prev,
        [date]: [...existingTimes, time],
      }
    })

    setDateTimeInput('')
  }

  const handleRemoveTime = (date, time) => {
    setDateTimeSelection((prev) => {
      const updatedTimes = prev[date].filter((item) => item !== time)

      if (updatedTimes.length === 0) {
        const { [date]: removedDate, ...rest } = prev
        return rest
      }

      return {
        ...prev,
        [date]: updatedTimes,
      }
    })
  }

  const handleAddShow = () => {
    if (!selectedMovie) {
      alert('Please select a movie')
      return
    }

    if (!showPrice) {
      alert('Please enter show price')
      return
    }

    if (Object.keys(dateTimeSelection).length === 0) {
      alert('Please add at least one show date and time')
      return
    }

    const showData = {
      movieId: selectedMovie,
      showPrice: Number(showPrice),
      dateTimeSelection,
    }

    console.log('Show Data:', showData)

    alert('Show added successfully')

    setSelectedMovie(null)
    setShowPrice('')
    setDateTimeSelection({})
    setDateTimeInput('')
  }

  const isAddShowDisabled =
    !selectedMovie || !showPrice || Object.keys(dateTimeSelection).length === 0

  return nowPlayingMovies.length > 0 ? (
    <>
      <h1 className="text-2xl font-bold mb-6">
        Add <span className="text-primary">Shows</span>
      </h1>

      <p className="mt-6 text-lg font-medium">Now Playing Movies</p>

      <div className="overflow-x-auto pb-4 no-scrollbar">
        <div className="flex gap-4 mt-4 w-max">
          {nowPlayingMovies.map((movie) => {
            const isSelected = selectedMovie === movie.id

            return (
              <div
                key={movie.id}
                onClick={() => setSelectedMovie(movie.id)}
                className="relative w-36 cursor-pointer hover:-translate-y-1 transition duration-300"
              >
                <div
                  className={`relative rounded-lg overflow-hidden w-36 h-52 border ${
                    isSelected
                      ? 'border-primary shadow-lg shadow-primary/20'
                      : 'border-transparent'
                  }`}
                >
                  <img
                    src={movie.poster_path || movie.backdrop_path}
                    alt={movie.title}
                    className={`w-full h-full object-cover ${
                      isSelected ? 'brightness-75' : 'brightness-90'
                    }`}
                  />

                  <div className="absolute bottom-0 left-0 w-full flex items-center justify-between gap-2 px-2 py-1.5 bg-black/70 text-xs">
                    <span className="flex items-center gap-1 text-gray-300">
                      <StarIcon className="w-3 h-3 text-primary fill-primary" />
                      {movie.vote_average?.toFixed
                        ? movie.vote_average.toFixed(1)
                        : movie.vote_average}
                    </span>

                    <span className="text-gray-400 truncate">
                      {movie.genres?.[0]?.name || 'Movie'}
                    </span>
                  </div>

                  {isSelected && (
                    <div className="absolute top-2 right-2 bg-primary text-white rounded-full p-1">
                      <CheckIcon className="w-4 h-4" />
                    </div>
                  )}
                </div>

                <div className="mt-1.5 px-0.5">
                  <p className="font-medium text-sm truncate">{movie.title}</p>
                  <p className="text-gray-400 text-xs mt-0.5">
                    {movie.release_date}
                  </p>
                </div>
              </div>
            )
          })}
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
            className="outline-none bg-transparent text-white placeholder:text-gray-500"
          />
        </div>
      </div>

      {/* Date and Time Selection */}
      <div className="mt-6">
        <label className="block text-sm font-medium mb-2">
          Select Date and Time
        </label>

        <div className="inline-flex gap-2 border border-gray-600 p-1 pl-3 rounded-lg items-center">
          <input
            ref={dateTimeRef}
            type="datetime-local"
            value={dateTimeInput}
            onChange={(e) => setDateTimeInput(e.target.value)}
            onClick={openDateTimePicker}
            className="outline-none rounded-md bg-transparent text-white text-sm datetime-input cursor-pointer"
          />

          <button
            type="button"
            onClick={openDateTimePicker}
            className="text-gray-300 hover:text-primary px-2 transition"
            title="Open calendar"
          >
            <CalendarIcon className="w-5 h-5" />
          </button>

          <button
            type="button"
            onClick={handleDateTimeAdd}
            className="bg-primary/80 text-white px-4 py-2 text-sm rounded-lg hover:bg-primary cursor-pointer transition"
          >
            Add Time
          </button>
        </div>
      </div>

      {/* Selected Date and Time Display */}
      {Object.keys(dateTimeSelection).length > 0 && (
        <div className="mt-6 max-w-lg">
          {Object.entries(dateTimeSelection).map(([date, times]) => (
            <div key={date} className="mb-4">
              <p className="text-sm font-medium text-gray-300 mb-2">{date}</p>

              <div className="flex flex-wrap gap-2">
                {times.map((time) => (
                  <div
                    key={time}
                    className="flex items-center gap-2 bg-primary/10 border border-primary/30 text-sm px-3 py-1.5 rounded-full"
                  >
                    <span>{time}</span>

                    <Trash2Icon
                      onClick={() => handleRemoveTime(date, time)}
                      className="w-4 h-4 text-red-500 hover:text-red-700 cursor-pointer"
                    />
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Add Show Button */}
      <button
        type="button"
        onClick={handleAddShow}
        disabled={isAddShowDisabled}
        className={`px-8 py-2.5 mt-8 rounded-lg transition-all ${
          isAddShowDisabled
            ? 'bg-gray-700 text-gray-400 cursor-not-allowed'
            : 'bg-primary text-white hover:bg-primary/90 cursor-pointer'
        }`}
      >
        Add Show
      </button>
    </>
  ) : (
    <p className="text-gray-400 animate-pulse">Loading...</p>
  )
}

export default AddShows