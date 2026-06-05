import React, { useState, useEffect } from 'react'
import { dummyTrailers } from '../../lib/dummyTrailers'
import { dummyBookingData } from '../../lib/dummyBookingData'
import { dateFormat } from '../../lib/dateFormat'
import { FiUsers, FiDollarSign } from 'react-icons/fi'
import { BsTicketPerforated } from 'react-icons/bs'
import { MdOutlineLocalMovies } from 'react-icons/md'
import { FaStar } from 'react-icons/fa'

const currency = import.meta.env.VITE_CURRENCY

const DashBoard = () => {
  const [dashboardData, setDashboardData] = useState({
    totalBookings: 0,
    totalRevenue: 0,
    activeShows: [],
    totalUser: 0
  })
  const [loading, setLoading] = useState(true)

  const dashboardCards = [
    { title: "Total Bookings", value: dashboardData.totalBookings || "0", Icon: BsTicketPerforated },
    { title: "Total Revenue", value: (currency || '$') + (dashboardData.totalRevenue || "0"), Icon: FiDollarSign },
    { title: "Active Shows", value: dashboardData.activeShows.length || "0", Icon: MdOutlineLocalMovies },
    { title: "Total Users", value: dashboardData.totalUser || "0", Icon: FiUsers }
  ]

  const fetchDashboardData = async () => {
    try {
      const totalRevenue = dummyBookingData
        .filter(b => b.isPaid)
        .reduce((sum, b) => sum + b.amount, 0)

      const activeShows = dummyTrailers.map(movie => ({
        _id: String(movie.id),
        showPrice: 49,
        showDateTime: Object.keys(movie.dateTime)[0] + 'T' + movie.dateTime[Object.keys(movie.dateTime)[0]][0],
        movie: {
          title: movie.title,
          poster_path: movie.backdrop_path,
          vote_average: movie.vote_average
        }
      }))

      setDashboardData({
        totalBookings: dummyBookingData.length,
        totalRevenue: totalRevenue,
        totalUser: 5,
        activeShows: activeShows
      })
    } catch (error) {
      console.error(error)
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    fetchDashboardData()
  }, [])

  return !loading ? (
    <>
      <div className="mb-6">
        <h1 className="text-2xl font-bold">
          Admin <span className="text-primary">Dashboard</span>
        </h1>
      </div>

      <div className="flex flex-wrap gap-4 mt-6">
        <div className="flex flex-wrap gap-4 w-full">
          {dashboardCards.map((card, index) => (
            <div key={index} className="flex items-center gap-3 bg-primary/10 border border-primary/20 rounded-xl px-5 py-4 min-w-[180px] flex-1">
              <card.Icon className="w-8 h-8 text-primary" size={30} />
              <div>
                <p className="text-sm text-gray-400">{card.title}</p>
                <p className="text-xl font-semibold">{card.value}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <p className="mt-10 text-lg font-medium">Active Shows</p>
      <div className="flex flex-wrap gap-6 mt-4 max-w-5xl">
        {dashboardData.activeShows.map((show) => (
          <div key={show._id} className="w-44 rounded-lg overflow-hidden pb-3 bg-primary/10 border border-primary/20 hover:-translate-y-1 transition duration-300">
            <img src={show.movie.poster_path} alt="" className="h-60 w-full object-cover" />
            <p className="font-medium p-2 truncate">{show.movie.title}</p>
            <div className="flex items-center justify-between px-2">
              <p className="text-lg font-medium">{currency} {show.showPrice}</p>
              <p className="flex items-center gap-1 text-sm text-gray-400 mt-1 pr-1">
                <FaStar className="w-4 h-4 text-primary fill-primary" />
                {show.movie.vote_average.toFixed(1)}
              </p>
            </div>
            <p className="px-2 pt-2 text-sm text-gray-500">{dateFormat(show.showDateTime)}</p>
          </div>
        ))}
      </div>
    </>
  ) : null
}

export default DashBoard