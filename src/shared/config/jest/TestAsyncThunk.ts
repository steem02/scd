import { type StateSchema } from '@/app/providers/StoreProvider';
import { type AsyncThunkAction } from '@reduxjs/toolkit';
import axios, { type AxiosStatic } from 'axios';
import type { NavigateFunction } from 'react-router-dom';

jest.mock('axios');
const ax = jest.mocked(axios);

export class TestAsyncThunk<Return, Params, RejectedValue> {
  dispatch: jest.MockedFn<any>;
  getState: () => StateSchema;

  api: jest.MockedFunctionDeep<AxiosStatic>;
  navigate: NavigateFunction;

  actionCreator: (
    params: Params
  ) => AsyncThunkAction<Return, Params, { rejectValue: RejectedValue }>;

  constructor(
    actionCreator: (
      params: Params
    ) => AsyncThunkAction<Return, Params, { rejectValue: RejectedValue }>
  ) {
    this.dispatch = jest.fn();
    this.getState = jest.fn();
    this.actionCreator = actionCreator;
    this.api = ax;
    this.navigate = jest.fn();
  }

  async callThunk(params: Params) {
    const action = this.actionCreator(this.dispatch);
    return action(this.dispatch, this.getState, {
      api: this.api,
      navigate: this.navigate,
    });
  }
}
