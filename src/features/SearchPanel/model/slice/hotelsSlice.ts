import { createAction, createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';

import type { HotelsSchema, SearchData } from '../types/HotelsSchema';

const initialState: HotelsSchema = {
  values: [],
  checkIn: '',
  count: '',
  city: ''
};

export const hotelsSlice = createSlice({
  name: 'hotels',
  initialState,
  reducers: {
    save: (state, action) => {
      console.log('first');
      state.values = [...action.payload];
    },
    book: (state, action: PayloadAction<SearchData>) => {
      state.checkIn = action.payload.checkIn;
      state.count = action.payload.count;
      state.city = action.payload.city;
    }
  }
});

export const GET_HOTELS = 'hotels/getHotels';
export const getHotels = createAction(
  GET_HOTELS,
  function prepare(city: string, checkIn: string, checkOut: string) {
    return {
      payload: {
        city,
        checkIn,
        checkOut
      }
    };
  }
);

export const { actions: hotelsActions } = hotelsSlice;
export const { reducer: hotelsReducer } = hotelsSlice;
