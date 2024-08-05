import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import customAxios from "../../utils/axios";

const initialState = {
  newMovies: [],
  isLoading: false,
  error: null,
};

export const fetchNewMovies = createAsyncThunk(
  "newMovies/fetchNewMovies",
  async (_, { rejectWithValue }) => {
    try {
      const res = await customAxios.get("/movie/now_playing");
      return res.data.results;
    } catch (error) {
      console.log(error);
      return rejectWithValue(error.message);
    }
  }
);

const newMoviesSlice = createSlice({
  name: "newMovies",
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(fetchNewMovies.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(fetchNewMovies.fulfilled, (state, { payload }) => {
        state.newMovies = payload;
        state.isLoading = false;
      })
      .addCase(fetchNewMovies.rejected, (state, { payload }) => {
        state.isLoading = false;
        state.error = payload;
      });
  },
});

const newMoviesReducer = newMoviesSlice.reducer;
export default newMoviesReducer;
