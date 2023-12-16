import { createAsyncThunk } from '@reduxjs/toolkit';
import { type User, userActions } from '@/entities/User';
import { USER_LOCALSTORAGE_KEY } from '@/shared/const/localStorage';
import type { ThunkConfig } from '@/app/providers/StoreProvider';

interface LoginDataParams {
  username: string;
  password: string;
}

export const loginByUserName = createAsyncThunk<User, LoginDataParams, ThunkConfig>(
  'login/loginByUserName',
  async (authData, thunkAPI) => {
    const { extra, dispatch, rejectWithValue } = thunkAPI;

    try {
      const reply = await extra.api.post<User>('/login', authData);

      if (reply.data == null) {
        throw new Error();
      }
      dispatch(userActions.setAuthData(reply.data));
      console.log(reply);
      localStorage.setItem(USER_LOCALSTORAGE_KEY, JSON.stringify(reply.data));
      // extra.navigate?.(RouterPath.Profile);
      return reply.data;
    } catch (err: any) {
      return rejectWithValue(err.response.data.message);
    }
  }
);
