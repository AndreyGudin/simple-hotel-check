import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';

import type {
  FavoriteHotel,
  LikedSchema,
  SortType
} from '../types/likedSchema';

const initialState: LikedSchema = {
  liked: [],
  sortType: undefined
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
    },
    sortByRate: (state, action: PayloadAction<'asc' | 'desc'>) => {
      const arr = [...state.liked];
      if (action.payload === 'desc')
        arr.sort((a, b) => {
          if (a.hotel.stars > b.hotel.stars) return 1;
          if (a.hotel.stars < b.hotel.stars) return -1;
          return 0;
        });
      if (action.payload === 'asc')
        arr.sort((a, b) => {
          if (a.hotel.stars < b.hotel.stars) return 1;
          if (a.hotel.stars > b.hotel.stars) return -1;
          return 0;
        });
      state.liked = [...arr];
    },
    sortByPrice: (state, action: PayloadAction<'asc' | 'desc'>) => {
      const arr = [...state.liked];
      if (action.payload === 'desc')
        arr.sort((a, b) => {
          if (a.hotel.priceAvg > b.hotel.priceAvg) return 1;
          if (a.hotel.priceAvg < b.hotel.priceAvg) return -1;
          return 0;
        });
      if (action.payload === 'asc')
        arr.sort((a, b) => {
          if (a.hotel.priceAvg < b.hotel.priceAvg) return 1;
          if (a.hotel.priceAvg > b.hotel.priceAvg) return -1;
          return 0;
        });
      state.liked = [...arr];
    },
    setSortType: (state, action: PayloadAction<SortType>) => {
      state.sortType = action.payload;
    }
  }
});

export const { actions: likedActions } = likedSlice;
export const { reducer: likedReducer } = likedSlice;
