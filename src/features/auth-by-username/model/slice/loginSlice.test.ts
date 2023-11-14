import { type DeepPartial } from '@reduxjs/toolkit';
import { type LoginSchema } from '@/features/auth-by-username';
import { loginActions, loginReducer } from '@/features/auth-by-username/model/slice/loginSlice';

describe('test login slice', () => {
  const state: DeepPartial<LoginSchema> = {};
  test('set username', () => {
    expect(loginReducer(state as LoginSchema, loginActions.setUserName('my name'))).toEqual({
      username: 'my name',
    });
  });

  test('set password', () => {
    expect(loginReducer(state as LoginSchema, loginActions.setPassword('password'))).toEqual({
      password: 'password',
    });
  });

  test('empty', () => {
    expect(loginReducer(undefined, loginActions.setUserName(''))).toEqual({
      username: '',
      isLoading: false,
      password: '',
    });
  });
});
