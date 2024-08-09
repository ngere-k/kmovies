import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isLoginOpen: false,
  isLogoutOpen: false,
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
  },
});

export const { openLoginModal, closeLoginModal, toggleLogoutModal } =
  modalSlice.actions;

const modalReducer = modalSlice.reducer;
export default modalReducer;
