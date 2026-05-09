import React, { useEffect, useState } from "react";
import BlurCircle from "../componenet/BlurCircle";
import Loading from "../componenet/Loading";
import { dummyBookingData } from "../lib/dummyBookingData";
import { timeFormat } from "../lib/timeFormat";
import { dateFormat } from "../lib/dateFormat";

const MyBookings = () => {
  const currency = import.meta.env.VITE_CURRENCY ?? "LKR";

  const [bookings, setBookings] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setBookings([...dummyBookingData]);
      setIsLoading(false);
    }, 400);
  }, []);

  const handlePayNow = (bookingId) => {
    setBookings((prev) =>
      prev.map((b) =>
        b.bookingId === bookingId ? { ...b, isPaid: true } : b
      )
    );
  };

  return !isLoading ? (
    <div className="relative px-6 md:px-16 lg:px-40 pt-28 md:pt-36 min-h-[80vh]">

      <BlurCircle top="100px" left="100px" />
      <BlurCircle bottom="0px" left="600px" />

      <h1 className="text-2xl font-bold mb-8 text-white">
        My Bookings
      </h1>

      {bookings.length === 0 ? (
        <div className="flex flex-col items-center justify-center mt-24 text-gray-400">
          <p className="text-lg">No bookings yet.</p>
          <p className="text-sm mt-1">Book a movie to see it here.</p>
        </div>
      ) : (
        <div className="space-y-6">
          {bookings.map((item, index) => (
            <div
              key={item.bookingId ?? index}
              className="relative flex flex-col md:flex-row justify-between 
              bg-gradient-to-r from-[#2b0f16] to-[#1a0f13] 
              border border-[#e33479]/30 
              rounded-xl p-5 
              shadow-lg shadow-[#e33479]/10 
              hover:scale-[1.01] transition-all duration-300"
            >
              {/* LEFT SIDE */}
              <div className="flex flex-col md:flex-row">
                <img
                  src={item.show.movie.poster_path}
                  alt={item.show.movie.title}
                  className="w-full md:w-40 h-28 rounded object-cover"
                />

                <div className="flex flex-col ml-0 md:ml-5 mt-3 md:mt-0">
                  <p className="text-lg font-semibold text-white">
                    {item.show.movie.title}
                  </p>

                  <p className="text-[#5bc0ff] text-sm font-semibold">
                    {timeFormat(item.show.movie.runtime)}
                  </p>

                  <p className="text-gray-400 text-sm mt-1">
                    {dateFormat(item.show.showDateTime)}
                  </p>
                </div>
              </div>

              {/* RIGHT SIDE */}
              <div className="flex flex-col md:items-end justify-between gap-4 mt-4 md:mt-0">

                <div className="flex items-center gap-4">
                  <p className="text-2xl font-bold text-white">
                    {currency} {item.amount ?? 0}
                  </p>

                  {!item.isPaid ? (
                    <button
                      onClick={() => handlePayNow(item.bookingId)}
                      className="bg-[#ff4d6d] hover:bg-[#ff3355] 
                      text-white px-5 py-2 text-sm 
                      rounded-full font-semibold 
                      transition-all duration-300 shadow-md"
                    >
                      Pay Now
                    </button>
                  ) : (
                    <span className="text-green-400 font-semibold text-sm">
                      Paid
                    </span>
                  )}
                </div>

                <div className="text-sm text-gray-300">
                  <p>
                    <span className="text-gray-500">Total Tickets:</span>{" "}
                    {item.bookedSeats?.length ?? 0}
                  </p>
                  <p>
                    <span className="text-gray-500">Seat Number:</span>{" "}
                    {item.bookedSeats?.join(", ") ?? "-"}
                  </p>
                </div>

              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  ) : (
    <Loading />
  );
};

export default MyBookings;