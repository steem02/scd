import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Profile, type ProfileSchema } from '../types/ProfileSchema';
import { fetchProfileData } from '@/entities/Profile';

const initialState: ProfileSchema = {
  data: undefined,
  isLoading: false,
};

export const profileSlice = createSlice({
  name: 'profile',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchProfileData.pending, (state, action) => {
        state.error = undefined;
        state.isLoading = true;
      })
      .addCase(fetchProfileData.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      })
      .addCase(fetchProfileData.fulfilled, (state, action: PayloadAction<Profile>) => {
        state.data = action.payload;
        state.isLoading = false;
      });
  },
});

export const { actions: profileActions, reducer: profileReducer } = profileSlice;
