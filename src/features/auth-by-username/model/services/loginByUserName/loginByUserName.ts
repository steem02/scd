import { createAsyncThunk } from '@reduxjs/toolkit';
import { type User } from '@/entities/User';
import axios from 'axios';
import { userSlice } from '@/entities/User/model/slice/userSlice';
import { USER_LOCALSTORAGE_KEY } from '@/shared/const/localStorage';

interface LoginDataParams {
  username: string;
  password: string;
}

export const loginByUserName = createAsyncThunk<
  User,
  LoginDataParams,
  {
    rejectValue: string;
  }
>('login/loginByUserName', async (authData, thunkAPI) => {
  try {
    const reply = await axios.post<User>('http://localhost:8000/login', authData);

    if (reply.data == null) {
      throw new Error('Error');
    }
    thunkAPI.dispatch(userSlice.actions.setAuthData(reply.data));
    localStorage.setItem(USER_LOCALSTORAGE_KEY, JSON.stringify(reply.data));
    return reply.data;
  } catch (err) {
    return thunkAPI.rejectWithValue(err.response.data.message);
  }
});
