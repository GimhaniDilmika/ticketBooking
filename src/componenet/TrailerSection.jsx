// src/components/TrailerSection.jsx
import React, { useState } from "react";
import BlurCircle from "./BlurCircle";

const trailers = [
  {
    id: 1,
    title: "Thunderbolts Final Trailer",
    videoId: "qqrpMRDuPfc",
    thumbnail: "https://img.youtube.com/vi/qqrpMRDuPfc/hqdefault.jpg",
  },
  {
    id: 2,
    title: "Iron Man Trailer",
    videoId: "8ugaeA-nMTc",
    thumbnail: "https://img.youtube.com/vi/8ugaeA-nMTc/hqdefault.jpg",
  },
  {
    id: 3,
    title: "Avengers Trailer",
    videoId: "eOrNdBpGMv8",
    thumbnail: "https://img.youtube.com/vi/eOrNdBpGMv8/hqdefault.jpg",
  },
  {
    id: 4,
    title: "Transformers: Rise of the Beasts",
    videoId: "itnqEauWQZM",
    thumbnail: "https://img.youtube.com/vi/itnqEauWQZM/hqdefault.jpg",
  },
];

const TrailerSection = () => {
  const [activeTrailer, setActiveTrailer] = useState(trailers[0]);

  return (
    <div className="relative overflow-hidden px-6 md:px-16 lg:px-24 xl:px-44 text-white mt-16 mb-24">
      
      {/* BACKGROUND BLUR */}
      <BlurCircle bottom="50px" right="50px" size={300} color="bg-red-500/30" />
      <BlurCircle top="0px" left="0px" size={250} color="bg-purple-500/20" />

      {/* Title */}
      <h2 className="text-2xl md:text-3xl font-semibold mb-6">Trailers</h2>

      {/* MAIN VIDEO */}
      <div className="w-full flex justify-center mb-8">
        <div className="w-full max-w-5xl aspect-video rounded-xl overflow-hidden shadow-2xl">
          <iframe
            className="w-full h-full"
            src={`https://www.youtube.com/embed/${activeTrailer.videoId}`}
            title={activeTrailer.title}
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
      </div>

      {/* THUMBNAILS */}
      <div className="flex flex-wrap gap-4 justify-center">
        {trailers.map((trailer) => (
          <button
            key={trailer.id}
            onClick={() => setActiveTrailer(trailer)}
            className={`group w-40 sm:w-48 rounded-lg overflow-hidden border 
              ${
                activeTrailer.id === trailer.id
                  ? "border-red-600"
                  : "border-transparent"
              }
              bg-gray-900/70 hover:bg-gray-800 transition`}
          >
            <div className="relative w-full h-24 sm:h-28 overflow-hidden">
              <img
                src={trailer.thumbnail}
                alt={trailer.title}
                className="w-full h-full object-cover group-hover:scale-105 transition"
              />

              {/* Play icon */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-8 h-8 rounded-full bg-black/70 flex items-center justify-center">
                  <span className="text-xs ml-0.5">▶</span>
                </div>
              </div>
            </div>
            <p className="text-xs sm:text-sm px-2 py-2 text-left truncate">
              {trailer.title}
            </p>
          </button>
        ))}
      </div>
    </div>
  );
};

export default TrailerSection;
