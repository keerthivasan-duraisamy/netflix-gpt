import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const TMDB_TOKEN =
  "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJmZTdhMzU3MTFhNDQxNTRhNTJlY2ZlOTUyY2E1OWUzYyIsIm5iZiI6MTc2MjYxODYwMy43MDMsInN1YiI6IjY5MGY2Y2ViNDFiMGI5M2Q3OGEwYzJlNSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.os_SYaWlDmuLP4OeONbD1UU6V8qlFUJ_fL4D9T2c1tE";

export const tmdbApi = createApi({
  reducerPath: "tmdbApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://api.themoviedb.org/3",
    prepareHeaders: (headers) => {
      headers.set("accept", "application/json");
      headers.set("Authorization", `Bearer ${TMDB_TOKEN}`);
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
