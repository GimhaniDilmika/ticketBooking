import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { dummyTrailers } from "../lib/dummyTrailers";
import BlurCircle from "../componenet/BlurCircle";
import { Heart, StarIcon, PlayCircleIcon } from "lucide-react";
import timeFormat from "../lib/timeFormat";

const MovieDetails = () => {
  const { id } = useParams();
  const [show, setShow] = useState(null);

  useEffect(() => {
    const movie = dummyTrailers.find((m) => String(m.id) === String(id));
    if (movie) setShow({ movie });
  }, [id]);

  if (!show) {
    return (
      <div className="min-h-[60vh] flex items-center justify-center text-gray-400">
        Loading...
      </div>
    );
  }

  const movie = show.movie;

  const year = movie.release_date?.split("-")[0];
  const genres = movie.genres?.map((g) => g.name).join(", ");
  const runtime = movie.runtime ? timeFormat(movie.runtime) : "";
  const rating = movie.vote_average?.toFixed(1) ?? "N/A";

  return (
    <div className="px-6 md:px-16 lg:px-32 pt-40 pb-16 text-white relative">

      {/* 🔥 Red Gradient Background */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-red-600/30 blur-[150px] rounded-full" />

      <div className="flex flex-col md:flex-row gap-10 max-w-6xl mx-auto relative">
        
        {/* Poster */}
        <img
          src={movie.backdrop_path}
          alt={movie.title}
          className="rounded-xl h-96 w-64 object-cover shadow-xl mx-auto md:mx-0"
        />

        {/* Right Section */}
        <div className="flex flex-col gap-4 max-w-2xl">
          <p className="text-primary font-medium tracking-wider">ENGLISH</p>

          <h1 className="text-4xl font-semibold">{movie.title}</h1>

          {/* Rating */}
          <div className="flex items-center gap-2 text-gray-300">
            <StarIcon className="w-5 h-5 text-primary fill-primary" />
            <span>{rating} User Rating</span>
          </div>

          {/* Overview */}
          <p className="text-gray-400 leading-relaxed">
            A queen sends the powerful and feared sorceress Gray Alys to the
            lost lands in search of magical power...
          </p>

          {/* Runtime + Genres + Year */}
          <p className="text-gray-300 text-sm">
            {runtime} • {genres} • {year}
          </p>

          {/* Buttons */}
          <div className="flex items-center gap-4 mt-3">
            <button className="flex items-center gap-2 px-7 py-3 text-sm bg-gray-800 hover:bg-gray-900 transition rounded-md font-medium">
              <PlayCircleIcon className="w-5 h-5" />
              Watch Trailer
            </button>
          <button className="px-10 py-3 text-sm bg-red-500 hover:bg-red-600 transition rounded-full font-medium">
             Buy Tickets
          </button>


            <button className="bg-gray-700 p-3 rounded-full hover:bg-gray-600 transition">
              <Heart className="w-5 h-5" />
            </button>
          </div>

          {/* ⭐ Cast Section */}
          <p className="text-lg font-medium mt-12">Your Favorite Cast</p>

          <div className="overflow-x-auto no-scrollbar mt-6 pb-4">
            <div className="flex items-center gap-6 w-max px-2">
              {movie.casts?.slice(0, 12).map((cast, index) => (
                <div
                  key={index}
                  className="flex flex-col items-center text-center"
                >
                  <img
                    src={cast.profile_path}
                    alt={cast.name}
                    className="rounded-full h-20 w-20 md:h-24 md:w-24 object-cover shadow-lg"
                  />
                  <p className="text-sm mt-2 text-gray-300 w-24 truncate">
                    {cast.name}
                  </p>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default MovieDetails;
