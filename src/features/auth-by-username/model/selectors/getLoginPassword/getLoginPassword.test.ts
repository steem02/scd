import { type DeepPartial } from '@/shared/types/redux';
import { type StateSchema } from '@/app/providers/StoreProvider';
import { getLoginPassword } from './getLoginPassword';

describe('check get password selector', () => {
  test('should return password', () => {
    const initialStore: DeepPartial<StateSchema> = {
      loginForm: {
        password: '12345',
      },
    };
    expect(getLoginPassword(initialStore as StateSchema)).toEqual('12345');
  });

  test('should work with empty state', () => {
    const initialStore: DeepPartial<StateSchema> = {};
    expect(getLoginPassword(initialStore as StateSchema)).toEqual(undefined);
  });
});
