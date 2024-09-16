import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import customAxios from "../../utils/axios";

const initialState = {
  credits: [],
  keywords: [],
};

export const fetchCredits = createAsyncThunk(
  "details/fetchCredits",
  async ({ type, id }, { rejectWithValue }) => {
    try {
      const res = await customAxios.get(`/${type}/${id}/credits`);
      return res.data;
    } catch (error) {
      console.log(error);
      //   return rejectWithValue(error.message);
    }
  }
);

export const fetchKeywords = createAsyncThunk(
  "details/fetchKeywords",
  async ({ type, id }, { rejectWithValue }) => {
    try {
      const res = await customAxios.get(`/${type}/${id}/keywords`);
      if (type === "movie") return res.data.keywords;
      return res.data.results;
    } catch (error) {
      console.log(error);
      //   return rejectWithValue(error.message);
    }
  }
);

const detailsSlice = createSlice({
  name: "details",
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(fetchCredits.fulfilled, (state, { payload }) => {
        state.credits = payload;
      })
      //   .addCase(fetchCredits.rejected, (state, { payload }) => {
      //     state.error = payload;
      //   })

      .addCase(fetchKeywords.fulfilled, (state, { payload }) => {
        state.keywords = payload;
      });
    //   .addCase(fetchKeywords.rejected, (state, { payload }) => {
    //     state.error = payload;
    //   });
  },
});

const detailsReducer = detailsSlice.reducer;
export default detailsReducer;
