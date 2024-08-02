import { configureStore } from "@reduxjs/toolkit";
import newMoviesReducer from "./features/movies/newMoviesSlice";

export const store = configureStore({
  reducer: {
    newMovies: newMoviesReducer,
  },
});
