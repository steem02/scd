import { createSlice } from '@reduxjs/toolkit';
import { type UserSchema } from '../types/user';

const initialState: UserSchema = {
  id: 1,
  username: '',
};

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {},
});

export const { actions: userActions, reducer: userReducer } = userSlice;