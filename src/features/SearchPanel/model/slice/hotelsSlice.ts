import { createAction, createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';

import type { HotelsSchema, SearchData } from '../types/HotelsSchema';

const initialState: HotelsSchema = {
  values: [],
  checkIn: new Date().toISOString().split('T')[0],
  count: '1',
  city: 'Москва',
  isLoading: false
};

export const hotelsSlice = createSlice({
  name: 'hotels',
  initialState,
  reducers: {
    save: (state, action) => {
      state.values = [...action.payload];
    },
    book: (state, action: PayloadAction<SearchData>) => {
      state.checkIn = action.payload.checkIn;
      state.count = action.payload.count;
      state.city = action.payload.city;
    },
    setIsLoading: (state, action: PayloadAction<boolean>) => {
      state.isLoading = action.payload;
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
