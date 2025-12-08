// src/pages/MyBookings.jsx
import React, { useEffect, useState } from "react";
import BlurCircle from "../componenet/BlurCircle";
import Loading from "../componenet/Loading";
import { dummyBookingData } from "../lib/dummyBookingData";
import { timeFormat } from "../lib/timeFormat";   // named export
import { dateFormat } from "../lib/dateFormat";   // named export

const MyBookings = () => {
  const currency = import.meta.env.VITE_CURRENCY ?? "LKR";

  const [bookings, setBookings] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const getMyBookings = async () => {
    setTimeout(() => {
      setBookings(dummyBookingData);
      setIsLoading(false);
    }, 400);
  };

  useEffect(() => {
    getMyBookings();
  }, []);

  // Simulate a payment action by toggling isPaid
  const handlePayNow = (bookingId) => {
    setBookings((prev) =>
      prev.map((b) => (b.bookingId === bookingId ? { ...b, isPaid: true } : b))
    );
  };

  return !isLoading ? (
    <div className="relative px-6 md:px-16 lg:px-40 pt-30 md:pt-40 min-h-[80vh]">
      <BlurCircle top="100px" left="100px" />
      <BlurCircle bottom="0px" left="600px" />

      <h1 className="text-lg font-semibold mb-4">My Bookings</h1>

      <div className="space-y-6">
        {bookings.map((item, index) => (
          <div
            key={item.bookingId ?? index}
            className="flex flex-col md:flex-row justify-between bg-[#1a0f13]/70 border border-[#e33479]/20 backdrop-blur-md rounded-xl p-4 mb-4 max-w-3xl"
          >
            {/* LEFT: poster + info */}
            <div className="flex flex-col md:flex-row">
              <img
                src={item.show.movie.poster_path}
                alt={item.show.movie.title}
                className="w-full md:w-40 h-28 rounded object-cover"
              />

              <div className="flex flex-col ml-0 md:ml-4 mt-3 md:mt-0 p-4">
                <p className="text-lg font-semibold">{item.show.movie.title}</p>

                <p className="text-[#5bc0ff] text-sm font-semibold">
                  {timeFormat(item.show.movie.runtime)}
                </p>

                <p className="text-gray-300 text-sm mt-1">
                  {dateFormat(item.show.showDateTime)}
                </p>
              </div>
            </div>

            {/* RIGHT: price, pay button, totals */}
            <div className="flex flex-col md:items-end md:text-right justify-between p-4">
              <div className="flex items-center gap-4">
                <p className="text-2xl font-semibold mb-3">
                  {currency} {item.amount ?? 0}
                </p>

                {!item.isPaid ? (
                  <button
                    onClick={() => handlePayNow(item.bookingId)}
                    className="bg-primary px-4 py-1.5 mb-3 text-sm rounded-full font-medium cursor-pointer"
                  >
                    Pay Now
                  </button>
                ) : (
                  <span className="text-sm text-green-400 font-medium">Paid</span>
                )}
              </div>

              <div className="text-sm">
                <p>
                  <span className="text-gray-400">Total Tickets:</span>{" "}
                  {Array.isArray(item.bookedSeats) ? item.bookedSeats.length : 0}
                </p>
                <p>
                  <span className="text-gray-400">Seat Number:</span>{" "}
                  {Array.isArray(item.bookedSeats) ? item.bookedSeats.join(", ") : "-"}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  ) : (
    <Loading />
  );
};

export default MyBookings;
