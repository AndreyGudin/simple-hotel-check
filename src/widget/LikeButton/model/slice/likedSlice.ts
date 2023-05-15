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
      state.liked = [...state.liked, action.payload];
    }
  }
});

export const { actions: likedActions } = likedSlice;
export const { reducer: likedReducer } = likedSlice;
