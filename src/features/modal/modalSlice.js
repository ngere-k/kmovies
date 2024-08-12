import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isLoginOpen: false,
  isLogoutOpen: false,
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
    toggleMode: (state) => {
      state.mode = state.mode === "light" ? "dark" : "light";
    },
  },
});

export const {
  openLoginModal,
  closeLoginModal,
  toggleLogoutModal,
  toggleMode,
} = modalSlice.actions;

const modalReducer = modalSlice.reducer;
export default modalReducer;
