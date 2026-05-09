export const dummyBookingData = [
  {
    bookingId: "b1",
    isPaid: true,
    amount: 147,
    bookedSeats: ["A1", "A2", "A3"],
    show: {
      movie: {
        title: "Avengers: Endgame",
        runtime: "181 min",
        poster_path: "https://image.tmdb.org/t/p/w500/ulzhLuWrPK07P1YkdWQLZnQh1JL.jpg",
      },
      showDateTime: "2025-07-24 13:00",
    },
  },
  {
    bookingId: "b2",
    isPaid: false,
    amount: 98,
    bookedSeats: ["D1", "D2"],
    show: {
      movie: {
        title: "Inception",
        runtime: "148 min",
        poster_path: "https://image.tmdb.org/t/p/w500/s3TBrRGB1iav7gFOCNx3H31MoES.jpg",
      },
      showDateTime: "2025-07-25 11:00",
    },
  },
  {
    bookingId: "b3",
    isPaid: false,
    amount: 49,
    bookedSeats: ["A1"],
    show: {
      movie: {
        title: "Spider-Man: No Way Home",
        runtime: "148 min",
        poster_path: "https://image.tmdb.org/t/p/w500/5weKu49pzJCt06OPpjvT80efnQj.jpg",
      },
      showDateTime: "2025-07-26 09:30",
    },
  },
];

const TICKET_PRICE = 49;

export function addBooking({ movieId, movieTitle, posterPath, runtime, date, time, seats }) {
  const newBooking = {
    bookingId: `b${Date.now()}`,
    isPaid: false,
    amount: seats.length * TICKET_PRICE,
    bookedSeats: seats,
    show: {
      movie: {
        title: movieTitle,
        runtime: runtime ?? "120 min",
        poster_path: posterPath ?? "",
      },
      showDateTime: `${date} ${time}`,
    },
  };
  dummyBookingData.unshift(newBooking);
  return newBooking;
}