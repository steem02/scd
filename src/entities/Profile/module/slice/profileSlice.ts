import { createSlice } from '@reduxjs/toolkit';
import { type ProfileSchema } from '../types/ProfileSchema';

const initialState: ProfileSchema = {
  data: [],
  isLoading: false,
};

export const profileSlice = createSlice({
  name: 'profile',
  initialState,
  reducers: {},
});

export const { actions: profileActions, reducer: profileReducer } = profileSlice;
