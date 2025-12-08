import React, { useEffect, useState } from "react";
import { useNavigate, useParams, useLocation } from "react-router-dom";
import toast from "react-hot-toast";

import BlurCircle from "../componenet/BlurCircle";
import Loading from "../componenet/Loading";

import { dummyTrailers } from "../lib/dummyTrailers";
import isoTimeFormat from "../lib/isoTimeFormat";

export default function SeatLayout() {
  const { id } = useParams();
  const location = useLocation();
  const navigate = useNavigate();

  const q = new URLSearchParams(location.search);
  const urlDate = q.get("date");
  const urlTime = q.get("time");

  const [movie, setMovie] = useState(null);
  const [selectedDate, setSelectedDate] = useState(urlDate || null);
  const [selectedTime, setSelectedTime] = useState(urlTime ? { time: urlTime } : null);
  const [selectedSeats, setSelectedSeats] = useState([]);

  // layout groups
  const topRows = ["A", "B"];
  const splitRows = ["C", "D"];
  const midRows = ["E", "F", "G"];
  const bottomRows = ["H", "I", "J"];

  const leftCount = 9;
  const rightCount = 9;
  const singleCount = 9;

  // --- NEW: center seats in split rows (1 seat in the middle) ---
  const centerCount = 1; // set 0 to remove center seat

  useEffect(() => {
    const found = dummyTrailers.find(
      (m) => String(m.id) === String(id) || String(m._id) === String(id)
    );
    if (found) {
      setMovie(found);
      if (!selectedDate && found.dateTime) {
        const keys = Object.keys(found.dateTime);
        if (keys.length) setSelectedDate(keys[0]);
      }
    }
  }, [id]);

  if (!movie) return <Loading />;

  const times = (movie.dateTime && movie.dateTime[selectedDate]) || [];

  const handleSeatClick = (seatId) => {
    if (!selectedTime) {
      toast.error("Please select a time first");
      return;
    }
    if (!selectedSeats.includes(seatId) && selectedSeats.length >= 5) {
      toast.error("Maximum 5 seats allowed");
      return;
    }
    setSelectedSeats((prev) =>
      prev.includes(seatId) ? prev.filter((s) => s !== seatId) : [...prev, seatId]
    );
  };

  const renderSeatButton = (seatId) => {
    const selected = selectedSeats.includes(seatId);
    return (
      <button
        key={seatId}
        className={`seat ${selected ? "selected" : ""}`}
        onClick={() => handleSeatClick(seatId)}
        data-seat={seatId}
        aria-label={seatId}
        aria-pressed={selected}
        title={seatId}
      />
    );
  };

  const renderNineRow = (row) => (
    <div className="seat-row" key={row}>
      <div className="seat-label">{row}</div>
      <div className="seat-grid nine" role="group" aria-label={`Row ${row}`}>
        {Array.from({ length: singleCount }, (_, i) => renderSeatButton(`${row}${i + 1}`))}
      </div>
    </div>
  );

  // --- UPDATED: split row now includes an optional center block (1 seat) ---
  const renderSplitRow = (row) => (
    <div className="seat-row split" key={row}>
      <div className="seat-label">{row}</div>

      <div className="seat-grid left" role="group" aria-label={`Row ${row} left`}>
        {Array.from({ length: leftCount }, (_, i) => renderSeatButton(`${row}${i + 1}`))}
      </div>

      {/* center block (1 seat) */}
      {centerCount > 0 && (
        <div className="seat-grid center" role="group" aria-label={`Row ${row} center`}>
          {Array.from({ length: centerCount }, (_, c) =>
            renderSeatButton(`${row}${leftCount + c + 1}`)
          )}
        </div>
      )}

      <div className="seat-gap" />

      <div className="seat-grid right" role="group" aria-label={`Row ${row} right`}>
        {Array.from({ length: rightCount }, (_, j) =>
          renderSeatButton(`${row}${leftCount + centerCount + j + 1}`)
        )}
      </div>
    </div>
  );

  const renderNumberLineForSplit = () => (
    <div className="seat-number-line">
      <div className="seat-label" />
      <div className="number-block left">
        {Array.from({ length: leftCount }, (_, i) => (
          <div key={i} className="seat-number">
            {i + 1}
          </div>
        ))}
      </div>

      {/* center number (if any) */}
      {centerCount > 0 && <div className="number-center">{leftCount + 1}</div>}

      <div className="seat-gap" />
      <div className="number-block right">
        {Array.from({ length: rightCount }, (_, i) => (
          <div key={i} className="seat-number">
            {leftCount + centerCount + i + 1}
          </div>
        ))}
      </div>
    </div>
  );

  const handleProceed = () => {
    if (!selectedTime) {
      toast.error("Select a time");
      return;
    }
    if (selectedSeats.length === 0) {
      toast.error("Select seats");
      return;
    }

    navigate("/my-bookings", {
      state: {
        movieId: movie.id,
        movieTitle: movie.title,
        date: selectedDate,
        time: selectedTime.time,
        seats: selectedSeats,
      },
    });
  };

  return (
    <div className="min-h-screen seatpage relative text-white">
      {/* blur circles */}
      <BlurCircle top="-260px" left="-220px" size={560} color="rgba(228,75,75,0.16)" />
      <BlurCircle top="-120px" right="-320px" size={480} color="rgba(20,40,80,0.14)" />
      <BlurCircle bottom="-40px" right="-40px" size={520} color="rgba(20,40,80,0.14)" />
      <BlurCircle top="20px" right="-200px" size={340} color="rgba(228,75,75,0.09)" />
      <BlurCircle bottom="120px" left="-260px" size={420} color="rgba(10,20,40,0.09)" />
      <BlurCircle top="-60px" left="40px" size={300} color="rgba(228,75,75,0.08)" />

      <div className="max-w-7xl mx-auto px-6 py-8">
        <h1 className="text-2xl font-semibold text-center mt-12 mb-3">Select your seat</h1>

        <div className="text-center text-gray-300 mb-4">
          <div className="text-lg font-medium">{movie.title}</div>
          <div className="text-sm">Date: {selectedDate ?? "—"}</div>
          <div className="text-sm">Time: {selectedTime?.time ?? "—"}</div>
        </div>

        <div className="flex gap-8 items-start">
          <aside className="timings-card">
            <p className="text-lg font-semibold mb-6">Available Timings</p>

            <div className="flex flex-col gap-3">
              {times.length > 0 ? (
                times.map((t, idx) => {
                  const isSelected = selectedTime?.time === t;
                  return (
                    <div
                      key={idx}
                      className={`time-item ${isSelected ? "active" : ""}`}
                      onClick={() => setSelectedTime({ time: t })}
                    >
                      <div className="text-sm">{isoTimeFormat(t)}</div>
                    </div>
                  );
                })
              ) : (
                <div className="text-sm text-gray-400">No times for this date</div>
              )}
            </div>
          </aside>

          <main className="seat-area flex-1">
            <div className="flex justify-center mb-4">
              <div className="screen-bar" />
            </div>
            <p className="text-center text-xs text-gray-400 mb-6">SCREEN SIDE</p>

            <div className="seat-grid-wrapper">
              <div className="top-rows">
                {topRows.map((r) => (
                  <div key={r} className="seat-row top">
                    <div className="seat-label">{r}</div>
                    <div className="seat-grid nine">
                      {Array.from({ length: 9 }, (_, i) => renderSeatButton(`${r}${i + 1}`))}
                    </div>
                  </div>
                ))}
              </div>

              <div className="split-rows mt-6">{splitRows.map((r) => renderSplitRow(r))}</div>

              {renderNumberLineForSplit()}

              {/* lower-grid: left (E/F/G) and right (H/I/J) aligned with the split right block */}
              <div className="lower-grid mt-6">
                <div className="lower-left">
                  {midRows.map((r) => renderNineRow(r))}
                </div>

                {/* right column width is calculated to match the right split block width */}
                <div className="lower-right">
                  {bottomRows.map((r) => (
                    <div className="seat-row" key={r}>
                      <div className="seat-label">{r}</div>
                      <div className="seat-grid nine right-aligned">
                        {Array.from({ length: singleCount }, (_, i) => renderSeatButton(`${r}${i + 1}`))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </main>
        </div>
      </div>

      <div className="proceed-bar">
        <div className="text-sm text-gray-300">
          Selected Seats:{" "}
          <span className="text-red-400 font-semibold">
            {selectedSeats.length ? selectedSeats.join(", ") : "None"}
          </span>
        </div>
        <button onClick={handleProceed} className="btn">
          Proceed to Checkout
        </button>
      </div>
    </div>
  );
}
