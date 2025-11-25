import React from "react";
import { dummyTrailers } from "../lib/dummyTrailers";
import BlurCircle from "../componenet/BlurCircle";
import MovieCard from "../componenet/MoveCard";

const Movies = () => {
  return dummyTrailers.length > 0 ? (
    <div className="relative my-40 mb-60 px-6 md:px-16 lg:px-40 xl:px-44 overflow-hidden min-h-[80vh]">
      <BlurCircle top="150px" left="0px" />
      <BlurCircle bottom="50px" right="50px" />

      <h1 className="text-lg font-medium my-4">Now Showing</h1>

      <div className="flex flex-wrap max-sm:justify-center gap-8">
        {dummyTrailers.map((movie, index) => (
          <MovieCard
            key={movie._id || movie.id || index}
            movie={movie}
          />
        ))}
      </div>
    </div>
  ) : (
    <div className="min-h-[80vh] flex items-center justify-center text-gray-400 text-lg">
      No movies found
    </div>
  );
};

export default Movies;
