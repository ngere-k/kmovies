import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isLoginOpen: false,
  isLogoutOpen: false,
  isMovieTrailerOpen: false,
  mode: "light",
};

const modalSlice = createSlice({
  name: "modal",
  initialState,
  reducers: {
    openLoginModal: (state) => {
      state.isLoginOpen = true;
    },
    closeLoginModal: (state) => {
      state.isLoginOpen = false;
    },
    toggleLogoutModal: (state) => {
      state.isLogoutOpen = !state.isLogoutOpen;
    },
    openMovieTrailer: (state) => {
      state.isMovieTrailerOpen = true;
    },
    closeMovieTrailer: (state) => {
      state.isMovieTrailerOpen = false;
    },
    toggleMode: (state) => {
      state.mode = state.mode === "light" ? "dark" : "light";
    },
  },
});

export const {
  openLoginModal,
  closeLoginModal,
  toggleLogoutModal,
  openMovieTrailer,
  closeMovieTrailer,
  toggleMode,
} = modalSlice.actions;

const modalReducer = modalSlice.reducer;
export default modalReducer;
