import { type StateSchema } from '@/app/providers/StoreProvider';
import { type AsyncThunkAction } from '@reduxjs/toolkit';

export class TestAsyncThunk<Return, Params, RejectedValue> {
  dispatch: jest.MockedFn<any>;
  getState: () => StateSchema;
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
  }

  async callThunk(params: Params) {
    const action = this.actionCreator(this.dispatch);
    return action(this.dispatch, this.getState, undefined);
  }
}
