import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import customAxios from "../../utils/axios";

const initialState = {
  all_movies: {},
  page: 0,
  pageCount: 0,
  grid_view: true,
  isLoading: false,
};

export const fetchDiscoverMovies = createAsyncThunk(
  "discoverMovies/fetchDiscoverMovies",
  async ({ page }, { dispatch, rejectWithValue }) => {
    try {
      const res = await customAxios.get("/discover/movie", {
        params: { page: page + 1 },
      });

      dispatch(changePageCount(res.data.total_pages));
      return res.data;
    } catch (error) {
      console.log(error);
      return rejectWithValue(error.message);
    }
  }
);

const discoverSlice = createSlice({
  name: "discover",
  initialState,
  reducers: {
    changePage: (state, action) => {
      state.page = action.payload;
    },
    changePageCount: (state, action) => {
      state.pageCount = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchDiscoverMovies.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(fetchDiscoverMovies.fulfilled, (state, { payload }) => {
        state.all_movies = payload;
        state.isLoading = false;
      })
      .addCase(fetchDiscoverMovies.rejected, (state, { payload }) => {
        state.isLoading = false;
        state.error = payload;
      });
  },
});

export const { changePage, changePageCount } = discoverSlice.actions;

const discoverReducer = discoverSlice.reducer;
export default discoverReducer;
