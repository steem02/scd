import { type DeepPartial } from '@/shared/types/redux';
import { type StateSchema } from '@/app/providers/StoreProvider';
import { getLoginUsername } from './getLoginUsername';

describe('check get username selector', () => {
  test('should return username', () => {
    const initialStore: DeepPartial<StateSchema> = {
      loginForm: {
        username: 'user',
      },
    };
    expect(getLoginUsername(initialStore as StateSchema)).toEqual('user');
  });

  test('should work with empty state', () => {
    const initialStore: DeepPartial<StateSchema> = {};
    expect(getLoginUsername(initialStore as StateSchema)).toEqual(undefined);
  });
});
