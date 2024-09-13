import { configureStore } from "@reduxjs/toolkit";
import newMoviesReducer from "./features/movies/newMoviesSlice";
import userReducer from "./features/user/userSlice";
import modalReducer from "./features/modal/modalSlice";
import searchReducer from "./features/search/searchSlice";
import detailsReducer from "./features/details/detailsSlice";

export const store = configureStore({
  reducer: {
    newMovies: newMoviesReducer,
    user: userReducer,
    modal: modalReducer,
    search: searchReducer,
    details: detailsReducer,
  },
});
