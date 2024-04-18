import {mockMonthlyData, mockSearchRes, mock_news_res} from '../constant/mock';

import {BASE_URL} from '../api/Api';
import Config from 'react-native-config';
import Helper from '../helper';
import axios from 'axios';
import {createAsyncThunk} from '@reduxjs/toolkit';

const mindAxios = axios.create({
  baseURL: BASE_URL,
  timeout: 5000, // Adjust timeout as needed
});

// ** Async thunks for API calls **
export const fetchLiveRatings = createAsyncThunk(
  'api/fetchLiveRatings',
  async ({timePeriod, baseCurrency, quoteCurrency}) => {
    let func = Helper.getFunctionForTimePeriod(timePeriod);
    const response = await mindAxios.get('', {
      params: {
        function: func.period,
        from_symbol: baseCurrency,
        to_symbol: quoteCurrency,
        apikey: Config.API_KEY,
      },
    });

    let data;
    if (response?.data?.Information) {
      // free quota expired
      data = Helper.createData(func?.mock, `Time Series FX (${timePeriod})`);
      return data;
    } else {
      data = Helper.createData(response.data, `Time Series FX (${timePeriod})`);
      return data;
    }
  },
);

export const fetchMonthlyRatings = createAsyncThunk(
  'api/fetchMonthlyRatings',
  async ({tickerSymbol}) => {
    const response = await mindAxios.get('', {
      params: {
        function: 'TIME_SERIES_MONTHLY',
        symbol: tickerSymbol,
        apikey: Config.API_KEY,
      },
    });
    let data;
    if (response?.data?.Information) {
      // free quota expired
      data = Helper.createData(mockMonthlyData, 'Monthly Time Series');
      return data;
    } else {
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
        apikey: Config.API_KEY,
      },
    });
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
  const response = await mindAxios.get('', {
    params: {
      function: 'NEWS_SENTIMENT',
      tickers: 'AAPL',
      apikey: Config.API_KEY,
    },
  });
  if (response?.data?.feed) {
    return response.data.feed?.slice(0, 10);
  } else if (!response?.data?.feed) {
    return mock_news_res.feed;
  } else {
  }
});
