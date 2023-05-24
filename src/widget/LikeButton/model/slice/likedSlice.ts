import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';

import type { FavoriteHotel, LikedSchema } from '../types/likedSchema';

const initialState: LikedSchema = {
  liked: []
};

export const likedSlice = createSlice({
  name: 'liked',
  initialState,
  reducers: {
    add: (state, action: PayloadAction<FavoriteHotel>) => {
      const favHotels = [...state.liked];
      const favHotel = favHotels.findIndex(
        (fav) => fav.hotel.hotelName === action.payload.hotel.hotelName
      );
      if (favHotel > -1) {
        favHotels.splice(favHotel, 1);
        state.liked = [...favHotels];
      } else {
        state.liked = [...state.liked, action.payload];
      }
    }
  }
});

export const { actions: likedActions } = likedSlice;
export const { reducer: likedReducer } = likedSlice;
