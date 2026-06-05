import React, { useState, useEffect } from 'react'
import { dummyTrailers } from '../../lib/dummyTrailers'
import { dateFormat } from '../../lib/dateFormat'

const ListShows = () => {
  const [shows, setShows] = useState([])
  const [loading, setLoading] = useState(true)

  const getAllShows = async () => {
    const formattedShows = dummyTrailers.map(movie => ({
      _id: String(movie.id),
      showPrice: 49,
      showDateTime: Object.keys(movie.dateTime)[0] + 'T' + movie.dateTime[Object.keys(movie.dateTime)[0]][0],
      movie: {
        title: movie.title,
        poster_path: movie.backdrop_path,
        vote_average: movie.vote_average
      }
    }))
    setShows(formattedShows)
    setLoading(false)
  }

  useEffect(() => {
    getAllShows()
  }, [])

  return !loading ? (
    <>
      <h1 className="text-2xl font-bold mb-6">
        List <span className="text-primary">Shows</span>
      </h1>
      <div className="max-w-4xl mt-6 overflow-x-auto">
        <table className="w-full border-collapse rounded-md overflow-hidden text-nowrap">
          <thead>
            <tr className="bg-primary/20 text-left text-white">
              <th className="p-2 font-medium pl-5">Movie Name</th>
              <th className="p-2 font-medium">Show Time</th>
              <th className="p-2 font-medium">Total Bookings</th>
              <th className="p-2 font-medium">Earnings</th>
            </tr>
          </thead>
          <tbody className="text-sm font-light">
            {shows.map((show, index) => (
              <tr
                key={index}
                className="border-b border-primary/20 bg-primary/5 even:bg-primary/10"
              >
                <td className="p-2 min-w-45 pl-5">{show.movie.title}</td>
                <td className="p-2">{dateFormat(show.showDateTime)}</td>
                <td className="p-2">0</td>
                <td className="p-2">$ 0</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  ) : <p className="text-gray-400 animate-pulse">Loading...</p>
}

export default ListShows