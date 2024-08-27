import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import customAxios from "../../utils/axios";

const initialState = {
  searchMovies: [],
  isLoading: false,
  error: null,
  page: 0,
  pageCount: 0,
};

export const fetchSearchMovies = createAsyncThunk(
  "search/fetchSearchMovies",
  async ({ query, page }, { dispatch, rejectWithValue }) => {
    try {
      const res = await customAxios("/search/multi", {
        params: { query, page: page + 1 },
      });

      dispatch(changePageCount(res.data.total_pages));
      return res.data.results;
    } catch (error) {
      console.log(error);
      return rejectWithValue(error.message);
    }
  }
);

const SearchSlice = createSlice({
  name: "search",
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
      .addCase(fetchSearchMovies.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(fetchSearchMovies.fulfilled, (state, { payload }) => {
        state.searchMovies = payload;
        state.isLoading = false;
      })
      .addCase(fetchSearchMovies.rejected, (state, { payload }) => {
        state.isLoading = false;
        state.error = payload;
      });
  },
});

export const { changePage, changePageCount } = SearchSlice.actions;

const searchReducer = SearchSlice.reducer;
export default searchReducer;
