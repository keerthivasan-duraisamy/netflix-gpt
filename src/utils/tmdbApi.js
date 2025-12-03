import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

// Use an environment variable for the TMDB token in production.
// Netlify: set REACT_APP_TMDB_TOKEN in Site > Build & deploy > Environment.
const TMDB_TOKEN =
  process.env.REACT_APP_TMDB_TOKEN ||
  "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJmZTdhMzU3MTFhNDQxNTRhNTJlY2ZlOTUyY2E1OWUzYyIsIm5iZiI6MTc2MjYxODYwMy43MDMsInN1YiI6IjY5MGY2Y2ViNDFiMGI5M2Q3OGEwYzJlNSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.os_SYaWlDmuLP4OeONbD1UU6V8qlFUJ_fL4D9T2c1tE";

if (!process.env.REACT_APP_TMDB_TOKEN) {
  // Log a one-time warning in development to remind the developer to set an env var.
  // This will still allow local dev with the fallback token.
  // eslint-disable-next-line no-console
  console.warn(
    "REACT_APP_TMDB_TOKEN is not set — falling back to the embedded token. Set REACT_APP_TMDB_TOKEN in Netlify environment variables for production."
  );
}

export const tmdbApi = createApi({
  reducerPath: "tmdbApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://api.themoviedb.org/3",
    prepareHeaders: (headers) => {
      headers.set("accept", "application/json");
      if (TMDB_TOKEN) {
        headers.set("Authorization", `Bearer ${TMDB_TOKEN}`);
      }
      return headers;
    },
  }),
  endpoints: (builder) => ({
    getNowPlayingMovies: builder.query({
      query: ({ language = "en-US", page = 1 } = {}) =>
        `/movie/now_playing?language=${language}&page=${page}`,
    }),
  }),
});

export const { useGetNowPlayingMoviesQuery } = tmdbApi;
