import axios from 'axios';
import { loginByUserName } from './loginByUserName';
import { userActions } from '@/entities/User/model/slice/userSlice';
import { TestAsyncThunk } from '@/shared/config/jest/TestAsyncThunk';

jest.mock('axios');
const ax = jest.mocked(axios);
const thunk = new TestAsyncThunk(loginByUserName);
describe('check get login by username selector', () => {
  test('success request', async () => {
    const userData = { username: 'user', password: '1234' };

    ax.post.mockReturnValue(Promise.resolve({ data: userData }));
    const action = await thunk.callThunk(userData);

    expect(ax.post).toHaveBeenCalledTimes(1);
    expect(thunk.dispatch).toHaveBeenCalledWith(userActions.setAuthData(userData));
    expect(thunk.dispatch).toHaveBeenCalledTimes(3);
    expect(action.payload).toEqual(userData);
    expect(action.meta.requestStatus).toEqual('fulfilled');
  });

  test('error request', async () => {
    const userData = { username: 'user', password: '1234' };

    ax.post.mockReturnValue(Promise.resolve({ status: 403 }));
    const action = await thunk.callThunk(userData);

    expect(action.payload).toEqual(undefined);
    expect(thunk.dispatch).toHaveBeenCalledTimes(2);
    expect(action.meta.requestStatus).toEqual('rejected');
  });
});
