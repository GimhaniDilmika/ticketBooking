import React, { useState } from "react";
import { useLocation, useParams } from "react-router-dom";

export default function SeatLayout() {
  const { id } = useParams();
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);

  const selectedDate = queryParams.get("date");
  const selectedTime = queryParams.get("time");

  const rows = ["A", "B", "C", "D", "E", "F", "G", "H", "I"];
  const seatsPerRow = 9;

  const [selectedSeats, setSelectedSeats] = useState([]);

  // ----------------------------
  //  LIMIT SELECTION TO 5 SEATS
  // ----------------------------
  const toggleSeat = (seat) => {
    if (selectedSeats.includes(seat)) {
      setSelectedSeats((prev) => prev.filter((s) => s !== seat));
      return;
    }

    if (selectedSeats.length >= 5) {
      alert("You can select only 5 seats at a time.");
      return;
    }

    setSelectedSeats((prev) => [...prev, seat]);
  };

  return (
    <div className="min-h-screen bg-black text-white flex flex-col items-center py-10">
      
      {/* Title */}
      <h1 className="text-4xl font-bold mb-2">Select your seat</h1>
      <div className="w-96 h-1 bg-red-500 mb-10 rounded-full"></div>

      {/* Date + Time Info */}
      <div className="text-gray-300 mb-8 text-lg">
        <p>Movie ID: {id}</p>
        <p>Date: {selectedDate}</p>
        <p>Time: {selectedTime}</p>
      </div>

      {/* Screen (curved bar) */}
      <div className="w-[600px] h-3 bg-red-500 rounded-full mb-12"></div>
      <p className="text-gray-400 mb-10 italic">SCREEN</p>

      {/* SEAT GRID */}
      <div className="flex flex-col gap-4">
        {rows.map((row) => (
          <div key={row} className="flex gap-4 justify-center">
            {Array.from({ length: seatsPerRow }, (_, i) => {
              const seat = `${row}${i + 1}`;
              const isSelected = selectedSeats.includes(seat);

              return (
                <button
                  key={seat}
                  onClick={() => toggleSeat(seat)}
                  className={`w-12 h-12 flex items-center justify-center rounded-lg border transition 
                  ${
                    isSelected
                      ? "bg-red-500 border-red-500 text-white"
                      : "border-gray-500 hover:bg-red-500/30"
                  }`}
                >
                  {seat}
                </button>
              );
            })}
          </div>
        ))}
      </div>

      {/* Selected Seats */}
      <div className="mt-12 text-lg">
        <span className="text-gray-300">Selected Seats: </span>
        <span className="text-red-400 font-semibold">
          {selectedSeats.join(", ") || "None"}
        </span>
      </div>

      {/* Confirm Button */}
      <button className="mt-8 px-10 py-3 bg-red-500 rounded-lg hover:bg-red-600 text-lg font-medium">
        Confirm Booking
      </button>
    </div>
  );
}
