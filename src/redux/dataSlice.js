// reducers.js
import {createSlice} from '@reduxjs/toolkit';

const initialState = {
  isOpen: false,
  isOpenTwo: false,
};
const dataSlice = createSlice({
  name: 'data',
  initialState,
  reducers: {
    setIsOpen: (state, {payload}) => {
      return {
        ...state,
        isOpen: payload,
      };
    },
    setIsOpenTwo: (state, {payload}) => {
      return {
        ...state,
        isOpenTwo: payload,
      };
    },
  },
});

export const {setIsOpen, setIsOpenTwo} = dataSlice.actions;
export const dataReducer = dataSlice.reducer;
