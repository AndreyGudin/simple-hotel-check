import { createAction, createSlice } from '@reduxjs/toolkit';
import type { HotelsSchema } from '../types/HotelsSchema';

const initialState: HotelsSchema = {
  values: []
};

export const hotelsSlice = createSlice({
  name: 'hotels',
  initialState,
  reducers: {
    save: (state, payload) => {
      console.log('first');
      state.values = [...payload.payload];
    }
  }
});

export const GET_HOTELS = 'hotels/getHotels';
export const getHotels = createAction(
  GET_HOTELS,
  function prepare(city: string) {
    return {
      payload: {
        city
      }
    };
  }
);

export const { actions: hotelsActions } = hotelsSlice;
export const { reducer: hotelsReducer } = hotelsSlice;
