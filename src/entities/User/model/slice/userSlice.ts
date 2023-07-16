import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import type { User, UserSchema } from '../types/userSchema';
import { USER_LOCAL_STORAGE_KEY } from '@/shared/const/localStorage';
const initialState: UserSchema = {
  authData: undefined
};
const userSlice = createSlice({
  name: 'userSlice',
  initialState,
  reducers: {
    setAuthData: (state, action: PayloadAction<User>) => {
      state.authData = action.payload;
    },
    initAuthData: (state) => {
      const user = localStorage.getItem(USER_LOCAL_STORAGE_KEY);
      if (user !== undefined && user !== null)
        state.authData = JSON.parse(user);
    },
    logout: (state) => {
      state.authData = undefined;
      localStorage.removeItem(USER_LOCAL_STORAGE_KEY);
    }
  }
});
export const { actions: userActions } = userSlice;
export const { reducer: userReducer } = userSlice;
