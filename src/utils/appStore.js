import { configureStore } from "@reduxjs/toolkit";
import userSlice from './userSlice';
import movieSlice from './movieSlice';
import { tmdbApi } from './tmdbApi';

const appStore = configureStore(
    {
        reducer: {
            user: userSlice,
            movies: movieSlice,
            [tmdbApi.reducerPath]: tmdbApi.reducer,
        },
        middleware: (getDefaultMiddleware) =>
            getDefaultMiddleware().concat(tmdbApi.middleware),
    }
)

export default appStore;
