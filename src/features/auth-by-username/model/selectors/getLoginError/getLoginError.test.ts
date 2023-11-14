import { type DeepPartial } from '@/shared/types/redux';
import { type StateSchema } from '@/app/providers/StoreProvider';
import { getLoginError } from './getLoginError';

describe('check get error selector', () => {
  test('get error state', () => {
    const initialStore: DeepPartial<StateSchema> = {
      loginForm: {
        error: 'Ошибка',
      },
    };
    expect(getLoginError(initialStore as StateSchema)).toEqual('Ошибка');
  });

  test('get empty state', () => {
    const initialStore: DeepPartial<StateSchema> = {};
    expect(getLoginError(initialStore as StateSchema)).toEqual(undefined);
  });
});
