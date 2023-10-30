import { createSlice } from '@reduxjs/toolkit';
import { type UserSchema } from '../types/UserSchema';
import { USER_LOCALSTORAGE_KEY } from '@/shared/const/localStorage';

const initialState: UserSchema = {};

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setAuthData: (state, action) => {
      state.authData = action.payload;
    },
    logout: (state) => {
      state.authData = undefined;
      localStorage.removeItem(USER_LOCALSTORAGE_KEY);
    },
    initAuthData: (state) => {
      const user = localStorage.getItem(USER_LOCALSTORAGE_KEY);
      if (user != null) {
        state.authData = JSON.parse(user);
      }
    },
  },
});

export const { actions: userActions, reducer: userReducer } = userSlice;
