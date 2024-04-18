import {
  fetchLiveRatings,
  fetchMonthlyRatings,
  fetchNewsData,
  fetchSearchResults,
} from './apiThunks';

import {createSlice} from '@reduxjs/toolkit';

const initialState = {
  liveRates: null,
  ratesLoading: false,
  ratesError: null,

  searchResults: [],
  searchLoading: false,
  searchError: null,

  newsData: null,
  newsLoading: false,
  newsError: null,

  monthlyRates: null,
  monthlyRatesLoading: false,
  monthlyRatesError: null,
};

const apiSlice = createSlice({
  name: 'api',
  initialState,
  reducers: {
    setSearch: (state, {payload}) => {
      return {
        ...state,
        searchResults: payload,
      };
    },
  },
  extraReducers: builder => {
    builder
      .addCase(fetchLiveRatings.pending, state => {
        state.ratesLoading = true;
        state.ratesError = null;
      })
      .addCase(fetchLiveRatings.fulfilled, (state, action) => {
        state.ratesLoading = false;
        state.liveRates = action.payload;
      })
      .addCase(fetchLiveRatings.rejected, (state, action) => {
        state.ratesLoading = false;
        state.ratesError = action.error.message;
      })
      // cases for fetchSearchResults
      .addCase(fetchSearchResults.pending, state => {
        state.searchLoading = true;
        state.searchError = null;
      })
      .addCase(fetchSearchResults.fulfilled, (state, action) => {
        state.searchLoading = false;
        state.searchResults = action.payload;
      })
      .addCase(fetchSearchResults.rejected, (state, action) => {
        state.searchLoading = false;
        state.searchError = action.error.message;
      })
      // cases for fetchNewsData
      .addCase(fetchNewsData.pending, state => {
        state.newsLoading = true;
        state.newsError = null;
      })
      .addCase(fetchNewsData.fulfilled, (state, action) => {
        state.newsLoading = false;
        state.newsData = action.payload;
      })
      .addCase(fetchNewsData.rejected, (state, action) => {
        state.newsLoading = false;
        state.newsError = action.error.message;
      })
      // cases for fetchMonthlyRatings
      .addCase(fetchMonthlyRatings.pending, state => {
        state.monthlyRatesLoading = true;
        state.monthlyRatesError = null;
      })
      .addCase(fetchMonthlyRatings.fulfilled, (state, action) => {
        state.monthlyRatesLoading = false;
        state.monthlyRates = action.payload;
      })
      .addCase(fetchMonthlyRatings.rejected, (state, action) => {
        state.monthlyRatesLoading = false;
        state.monthlyRatesError = action.error.message;
      });
  },
});
export const {setSearch} = apiSlice.actions;
export const apiReducer = apiSlice.reducer;
