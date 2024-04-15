import {configureStore} from '@reduxjs/toolkit';
import {dataReducer} from './dataSlice';
import {apiReducer} from './apiSlice';

const store = configureStore({
  reducer: {
    api: apiReducer,
    data: dataReducer,
  },
});

export default store;
