import { createAsyncThunk } from '@reduxjs/toolkit';
import { RouterPath } from '@/app/types/RouterPath';
import type { ThunkConfig } from '@/app/providers/StoreProvider';
import { Profile } from '@/entities/Profile';

export const fetchProfileData = createAsyncThunk<Profile, void, ThunkConfig>(
  'profile/fetchProfileData',
  async (_, thunkAPI) => {
    const { extra, rejectWithValue } = thunkAPI;

    try {
      const reply = await extra.api.get<Profile>(RouterPath.Profile);

      if (reply.data == null) {
        throw new Error();
      }
      return reply.data;
    } catch (err: any) {
      return rejectWithValue(err.response.data.message);
    }
  }
);
