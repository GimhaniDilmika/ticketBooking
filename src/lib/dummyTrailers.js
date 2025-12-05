// src/lib/dummyTrailers.js

// ==== IMPORT ALL CAST IMAGES ====
import sigourney from "../assets/sigourney.png";
import stephen from "../assets/stephen.png";
import zoe from "../assets/zoe.png";

import Leo from "../assets/Leo.png";
import Joseph from "../assets/Joseph.png";
import Tom from "../assets/Tom.png";

import Anne from "../assets/Anne.png";
import Robert from "../assets/Robert.png";
import ZoeKravitz from "../assets/zoe.png"; // renamed correctly
import Paul from "../assets/Paul.png";
import Matthew from "../assets/Matthew.png";

// These MUST exist — check your assets folder
import Jessica from "../assets/Jessica.png";
import Joaquin from "../assets/Joaquin.png";
import Zazie from "../assets/Zazie.png";
import Niro from "../assets/Niro.png";
import Chris from "../assets/Chris.png";
import Dave from "../assets/Dave.png";

import Holland from "../assets/Holland.png";
import zendaya from "../assets/zendaya.png";
import benedict from "../assets/benedict.png";


// =======================
//  DUMMY TRAILER DATA
// =======================
export const dummyTrailers = [
  // === MOVIE 1 ===
  {
    id: 1,
    title: "Avengers: Endgame",
    release_date: "2019-04-26",
    genres: [{ name: "Action" }, { name: "Sci-Fi" }],
    runtime: 181,
    vote_average: 8.4,
    backdrop_path:
      "https://image.tmdb.org/t/p/w500/ulzhLuWrPK07P1YkdWQLZnQh1JL.jpg",

    casts: [
      {
        name: "Chris Evans",
        profile_path:
          "https://image.tmdb.org/t/p/w185/3bOGNsHlrswhyW79uvIHH1V43JI.jpg",
      },
      {
        name: "Scarlett Johansson",
        profile_path:
          "https://image.tmdb.org/t/p/w185/6NsMbJXRlDZuDzatN2akFdGuTvx.jpg",
      },
    ],

    dateTime: {
      "2025-07-24": ["10:00", "13:00"],
      "2025-07-25": ["11:00", "15:00"],
      "2025-07-26": ["09:30", "14:30"],
      "2025-07-27": ["10:00"],
    },
  },

  // === MOVIE 2 ===
  {
    id: 2,
    title: "Avatar: The Way of Water",
    release_date: "2022-12-16",
    genres: [{ name: "Adventure" }, { name: "Fantasy" }],
    runtime: 192,
    vote_average: 7.7,
    backdrop_path:
      "https://image.tmdb.org/t/p/w500/94xxm5701CzOdJdUEdIuwqZaowx.jpg",

    casts: [
      { name: "Sigourney Weaver", profile_path: sigourney },
      { name: "Stephen Lang", profile_path: stephen },
      { name: "Zoe Saldaña", profile_path: zoe },
    ],

    dateTime: {
      "2025-07-24": ["10:00", "13:00"],
      "2025-07-25": ["11:00", "15:00"],
      "2025-07-26": ["09:30", "14:30"],
      "2025-07-27": ["10:00"],
    },
  },

  // === MOVIE 3 ===
  {
    id: 3,
    title: "Inception",
    release_date: "2010-07-16",
    genres: [{ name: "Sci-Fi" }, { name: "Thriller" }],
    runtime: 148,
    vote_average: 8.8,
    backdrop_path:
      "https://image.tmdb.org/t/p/w500/s3TBrRGB1iav7gFOCNx3H31MoES.jpg",

    casts: [
      { name: "Leonardo DiCaprio", profile_path: Leo },
      { name: "Joseph Gordon-Levitt", profile_path: Joseph },
      { name: "Tom Hardy", profile_path: Tom },
    ],

    dateTime: {
      "2025-07-24": ["10:00", "13:00"],
      "2025-07-25": ["11:00", "15:00"],
      "2025-07-26": ["09:30", "14:30"],
      "2025-07-27": ["10:00"],
    },
  },

  // === MOVIE 4 ===
  {
    id: 4,
    title: "The Batman",
    release_date: "2022-03-04",
    genres: [{ name: "Crime" }, { name: "Thriller" }],
    runtime: 175,
    vote_average: 7.9,
    backdrop_path:
      "https://image.tmdb.org/t/p/w500/74xTEgt7R36Fpooo50r9T25onhq.jpg",

    casts: [
      { name: "Robert Pattinson", profile_path: Robert },
      { name: "Zoë Kravitz", profile_path: ZoeKravitz },
      { name: "Paul Dano", profile_path: Paul },
    ],

    dateTime: {
      "2025-07-24": ["10:00", "13:00"],
      "2025-07-25": ["11:00", "15:00"],
      "2025-07-26": ["09:30", "14:30"],
      "2025-07-27": ["10:00"],
    },
  },

  // === MOVIE 5 ===
  {
    id: 5,
    title: "Interstellar",
    release_date: "2014-11-07",
    genres: [{ name: "Adventure" }, { name: "Sci-Fi" }],
    runtime: 169,
    vote_average: 8.6,
    backdrop_path:
      "https://image.tmdb.org/t/p/w500/rAiYTfKGqDCRIIqo664sY9XZIvQ.jpg",

    casts: [
      { name: "Matthew McConaughey", profile_path: Matthew },
      { name: "Anne Hathaway", profile_path: Anne },
      { name: "Jessica Chastain", profile_path: Jessica },
    ],

    dateTime: {
      "2025-07-24": ["10:00", "13:00"],
      "2025-07-25": ["11:00", "15:00"],
      "2025-07-26": ["09:30", "14:30"],
      "2025-07-27": ["10:00"],
    },
  },

  // === MOVIE 6 ===
  {
    id: 6,
    title: "Joker",
    release_date: "2019-10-04",
    genres: [{ name: "Crime" }, { name: "Drama" }],
    runtime: 122,
    vote_average: 8.4,
    backdrop_path:
      "https://image.tmdb.org/t/p/w500/udDclJoHjfjb8Ekgsd4FDteOkCU.jpg",

    casts: [
      { name: "Joaquin Phoenix", profile_path: Joaquin },
      { name: "Zazie Beetz", profile_path: Zazie },
      { name: "Robert De Niro", profile_path: Niro },
    ],

    dateTime: {
      "2025-07-24": ["10:00", "13:00"],
      "2025-07-25": ["11:00", "15:00"],
      "2025-07-26": ["09:30", "14:30"],
      "2025-07-27": ["10:00"],
    },
  },

  // === MOVIE 7 ===
  {
    id: 7,
    title: "Guardians of the Galaxy Vol. 3",
    release_date: "2023-05-05",
    genres: [{ name: "Action" }, { name: "Adventure" }],
    runtime: 150,
    vote_average: 8.0,
    backdrop_path:
      "https://image.tmdb.org/t/p/w500/r2J02Z2OpNTctfOSN1Ydgii51I3.jpg",

    casts: [
      { name: "Chris Pratt", profile_path: Chris },
      { name: "Zoe Saldana", profile_path: zoe },
      { name: "Dave Bautista", profile_path: Dave },
    ],

    dateTime: {
      "2025-07-24": ["10:00", "13:00"],
      "2025-07-25": ["11:00", "15:00"],
      "2025-07-26": ["09:30", "14:30"],
      "2025-07-27": ["10:00"],
    },
  },

  // === MOVIE 8 ===
  {
    id: 8,
    title: "Spider-Man: No Way Home",
    release_date: "2021-12-17",
    genres: [{ name: "Action" }, { name: "Fantasy" }],
    runtime: 148,
    vote_average: 8.3,
    backdrop_path:
      "https://image.tmdb.org/t/p/w500/5weKu49pzJCt06OPpjvT80efnQj.jpg",

    casts: [
      { name: "Tom Holland", profile_path: Holland },
      { name: "Zendaya", profile_path: zendaya },
      { name: "Benedict Cumberbatch", profile_path: benedict },
    ],

    dateTime: {
      "2025-07-24": ["10:00", "13:00"],
      "2025-07-25": ["11:00", "15:00"],
      "2025-07-26": ["09:30", "14:30"],
      "2025-07-27": ["10:00"],
    },
  },
];
