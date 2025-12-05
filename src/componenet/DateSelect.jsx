// src/componenet/DateSelect.jsx
import React, { useState, useMemo } from "react";
import { useNavigate } from "react-router-dom";

const MONTHS = ["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"];

function formatDate(dateStr) {
  const d = new Date(dateStr);
  if (isNaN(d.getTime())) return { day: dateStr, month: "" };

  return {
    day: d.getDate(),
    month: MONTHS[d.getMonth()],
  };
}

export default function DateSelect({ dateTime = {}, id }) {
  const navigate = useNavigate();

  // Get all available dates
  const dateKeys = useMemo(() => Object.keys(dateTime), [dateTime]);

  // User selections
  const [selectedDate, setSelectedDate] = useState(null);
  const [selectedTime, setSelectedTime] = useState(null);

  // ------------------------------
  //  BOOK NOW VALIDATION FUNCTION
  // ------------------------------
  const handleBookNow = () => {
    if (!selectedDate) {
      alert("❗ Please select a date first!");
      return;
    }
    if (!selectedTime) {
      alert("❗ Please select a time!");
      return;
    }

    // Navigate to next page
    navigate(
      `/movies/${id}/seats?date=${encodeURIComponent(
        selectedDate
      )}&time=${encodeURIComponent(selectedTime)}`
    );
  };

  return (
    <section
      id="dateSelect"
      className="mt-24 bg-[#201018] rounded-3xl px-8 py-10 max-w-6xl mx-auto"
    >
      {/* Top Row */}
      <div className="flex items-center justify-between mb-8">
        <h2 className="text-xl font-semibold">Choose Date & Time</h2>

        <button
          onClick={handleBookNow}
          className="px-8 py-3 bg-red-500 hover:bg-red-600 rounded-md font-medium"
        >
          Book Now
        </button>
      </div>

      {/* ----------------------- */}
      {/*       DATE BUTTONS      */}
      {/* ----------------------- */}
      <p className="text-sm text-gray-300 mb-3">Available Dates</p>
      <div className="flex items-center gap-3 mb-8 overflow-x-auto no-scrollbar">
        {dateKeys.map((dateKey) => {
          const { day, month } = formatDate(dateKey);
          const isActive = selectedDate === dateKey;

          return (
            <button
              key={dateKey}
              onClick={() => {
                setSelectedDate(dateKey);
                setSelectedTime(null); // Reset time when date changes
              }}
              className={`flex flex-col items-center justify-center w-16 h-20 rounded-xl border text-sm
                ${
                  isActive
                    ? "bg-red-500 border-red-500 text-white"
                    : "bg-transparent border-red-500/40 text-gray-200 hover:bg-red-500/20"
                }`}
            >
              <span className="text-lg font-semibold">{day}</span>
              <span className="text-xs">{month}</span>
            </button>
          );
        })}
      </div>

      {/* ----------------------- */}
      {/*       TIME BUTTONS      */}
      {/* ----------------------- */}
      <p className="text-sm text-gray-300 mb-3">Available Times</p>
      <div className="flex flex-wrap gap-3">
        {(selectedDate ? dateTime[selectedDate] : []).map((time) => {
          const isActive = selectedTime === time;

          return (
            <button
              key={time}
              onClick={() => setSelectedTime(time)}
              className={`px-4 py-2 rounded-lg text-sm border
                ${
                  isActive
                    ? "bg-red-500 border-red-500 text-white"
                    : "bg-transparent border-red-500/40 text-gray-200 hover:bg-red-500/20"
                }`}
            >
              {time}
            </button>
          );
        })}
      </div>
    </section>
  );
}
