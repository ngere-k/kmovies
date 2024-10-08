import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import customAxios from "../../utils/axios";

const initialState = {
  credits: [],
  keywords: [],
  videos: [],
  recommendations: [],
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

export const fetchVideos = createAsyncThunk(
  "details/fetchVideos",
  async ({ type, id }, { rejectWithValue }) => {
    try {
      const res = await customAxios.get(`/${type}/${id}/videos`);
      return res.data.results;
    } catch (error) {
      console.log(error);
      //   return rejectWithValue(error.message);
    }
  }
);

export const fetchRecommendations = createAsyncThunk(
  "details/fetchRecommendations",
  async ({ type, id }, { rejectWithValue }) => {
    try {
      const res = await customAxios.get(`/${type}/${id}/recommendations`);
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
      .addCase(fetchKeywords.fulfilled, (state, { payload }) => {
        state.keywords = payload;
      })
      .addCase(fetchVideos.fulfilled, (state, { payload }) => {
        state.videos = payload;
      })
      .addCase(fetchRecommendations.fulfilled, (state, { payload }) => {
        state.recommendations = payload;
      });
  },
});

const detailsReducer = detailsSlice.reducer;
export default detailsReducer;
