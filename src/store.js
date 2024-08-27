import { configureStore } from "@reduxjs/toolkit";
import newMoviesReducer from "./features/movies/newMoviesSlice";
import userReducer from "./features/user/userSlice";
import modalReducer from "./features/modal/modalSlice";
import searchReducer from "./features/search/searchSlice";

export const store = configureStore({
  reducer: {
    newMovies: newMoviesReducer,
    user: userReducer,
    modal: modalReducer,
    search: searchReducer,
  },
});
