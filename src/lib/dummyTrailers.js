// src/lib/dummyTrailers.js
import sigourney from "../assets/sigourney.png";
import stephen from "../assets/stephen.png";
import zoe from "../assets/zoe.png";
import Leo from "../assets/Leo.png";
import Joseph from "../assets/Joseph.png";
import Tom from "../assets/Tom.png";

export const dummyTrailers = [
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

    // ✅ show.dateTime / movie.dateTime will come from here
    dateTime: {
      "2025-07-24": ["10:00", "13:00"],
      "2025-07-25": ["11:00", "15:00"],
      "2025-07-26": ["09:30", "14:30"],
      "2025-07-27": ["10:00"],
    },
  },

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
      {
        name: "Sigourney Weaver",
        profile_path: sigourney,
      },
      {
        name: "Stephen Lang",
        profile_path: stephen,
      },
      {
        name: "Zoe Saldaña",
        profile_path: zoe,
      },
    ],
  },

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
      {
        name: "Leonardo DiCaprio",
        profile_path: Leo,
      },
      {
        name: "Joseph Gordon-Levitt",
        profile_path: Joseph,
      },
      {
        name: "Tom Hardy",
        profile_path: Tom,
      },
    ],
  },

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
      {
        name: "Robert Pattinson",
        profile_path:
          "https://image.tmdb.org/t/p/w185/7aYbPjUlfS4cF3RJT5w76wWmMeT.jpg",
      },
      {
        name: "Zoë Kravitz",
        profile_path:
          "https://image.tmdb.org/t/p/w185/ptVxQfCYhIwM9B20BMAeYqSdz8F.jpg",
      },
      {
        name: "Paul Dano",
        profile_path:
          "https://image.tmdb.org/t/p/w185/k0rO1Rer3KzuS9RfBW71dfCEi0v.jpg",
      },
    ],
  },

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
      {
        name: "Matthew McConaughey",
        profile_path:
          "https://image.tmdb.org/t/p/w185/bX7lLhJZ8d71Quzjq1zhcplzCwQ.jpg",
      },
      {
        name: "Anne Hathaway",
        profile_path:
          "https://image.tmdb.org/t/p/w185/uaC3bZfTG3H39YsKfS8eKUXqUpL.jpg",
      },
      {
        name: "Jessica Chastain",
        profile_path:
          "https://image.tmdb.org/t/p/w185/lCbDgLcyuQW2FAJqPideaZ9iPzR.jpg",
      },
    ],
  },

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
      {
        name: "Joaquin Phoenix",
        profile_path:
          "https://image.tmdb.org/t/p/w185/sCm0uJw0d0Cgrjj55qmjGwWv5kB.jpg",
      },
      {
        name: "Zazie Beetz",
        profile_path:
          "https://image.tmdb.org/t/p/w185/a1YeQs7rTJkR1dfB8wEfr2E1Vlz.jpg",
      },
      {
        name: "Robert De Niro",
        profile_path:
          "https://image.tmdb.org/t/p/w185/cT8htcckIuyI1Lqwt1CvD02ynTh.jpg",
      },
    ],
  },

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
      {
        name: "Chris Pratt",
        profile_path:
          "https://image.tmdb.org/t/p/w185/83o3ko4sWQ2Cz1x0mHqjttBqimt.jpg",
      },
      {
        name: "Zoe Saldana",
        profile_path:
          "https://image.tmdb.org/t/p/w185/iK4JqGqFvqzVCWTK6he9UuBQ9rB.jpg",
      },
      {
        name: "Dave Bautista",
        profile_path:
          "https://image.tmdb.org/t/p/w185/mQ9yeYQZdew4ZvFjJAhG4TOjPzD.jpg",
      },
    ],
  },

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
      {
        name: "Tom Holland",
        profile_path:
          "https://image.tmdb.org/t/p/w185/bBRlrpJm9XkNSg0YT5LCaxqoFMX.jpg",
      },
      {
        name: "Zendaya",
        profile_path:
          "https://image.tmdb.org/t/p/w185/hjuDCEzUPWumoJqkYt5s1W9jO1I.jpg",
      },
      {
        name: "Benedict Cumberbatch",
        profile_path:
          "https://image.tmdb.org/t/p/w185/fBEucxECxGLKVHBznO0qHtCGiMO.jpg",
      },
    ],
  },
];
