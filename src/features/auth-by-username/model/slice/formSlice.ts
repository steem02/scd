import { createSlice, type PayloadAction } from '@reduxjs/toolkit';
import { type LoginSchema } from '../types/LoginSchema';
import { loginByUserName } from '@/features/auth-by-username/model/services/loginByUserName/loginByUserName';

const initialState: LoginSchema = {
  username: '',
  password: '',
  isLoading: false,
};

export const loginSlice = createSlice({
  name: 'login',
  initialState,
  reducers: {
    setUserName: (state, action: PayloadAction<string>) => {
      state.username = action.payload;
    },
    setPassword: (state, action: PayloadAction<string>) => {
      state.password = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(loginByUserName.pending, (state, action) => {
        state.error = undefined;
        state.isLoading = true;
      })
      .addCase(loginByUserName.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      })
      .addCase(loginByUserName.fulfilled, (state, action) => {
        state.isLoading = false;
      });
  },
});

export const { actions: loginActions, reducer: loginReducer } = loginSlice;
