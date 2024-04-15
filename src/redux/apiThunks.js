import {createAsyncThunk} from '@reduxjs/toolkit';
import axios from 'axios';
import Helper from '../helper';
import {API_KEY, BASE_URL} from '../api/Env';
import {mockMonthlyData, mockSearchRes, mock_news_res} from '../constant/mock';

const mindAxios = axios.create({
  baseURL: BASE_URL,
  timeout: 5000, // Adjust timeout as needed
});

export const fetchMonthlyRatings = createAsyncThunk(
  'api/fetchMonthlyRatings',
  async ({tickerSymbol}) => {
    const response = await mindAxios.get('', {
      params: {
        function: 'TIME_SERIES_MONTHLY',
        symbol: tickerSymbol,
        apikey: API_KEY,
      },
    });
    let data;
    if (response?.data?.Information) {
      // free quota expired
      data = Helper.createData(mockMonthlyData, 'Monthly Time Series');
      console.log('free quota expired', data);
      return data;
    } else {
      console.log('ratesData', response.data);
      data = Helper.createData(response.data, 'Monthly Time Series');
      return data;
    }
  },
);
export const fetchSearchResults = createAsyncThunk(
  'api/fetchSearchResults',
  async text => {
    const response = await mindAxios.get('', {
      params: {
        function: 'SYMBOL_SEARCH',
        keywords: text,
        apikey: API_KEY,
      },
    });
    // console.log('ratesData', response?.data);
    if (response?.data?.bestMatches) {
      return response?.data?.bestMatches.slice(0, 5);
    } else if (response?.data?.Information) {
      // free quota expired
      return mockSearchRes?.bestMatches.slice(0, 5);
    } else {
      return [];
    }
  },
);

export const fetchNewsData = createAsyncThunk('api/fetchNewsData', async () => {
  console.log('fetchNewsData call');
  const response = await mindAxios.get('', {
    params: {
      function: 'NEWS_SENTIMENT',
      tickers: 'AAPL',
      apikey: API_KEY,
    },
  });
  if (response?.data?.feed) {
    return response.data.feed?.slice(0, 10);
  } else if (!response?.data?.feed) {
    return mock_news_res.feed;
  } else {
  }
});
