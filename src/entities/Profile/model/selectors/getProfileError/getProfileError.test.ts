import { type DeepPartial } from '@/shared/types/redux';
import { type StateSchema } from '@/app/providers/StoreProvider';
import { getProfileError } from './getProfileError';

describe('check get error selector', () => {
  test('get error state', () => {
    const initialStore: DeepPartial<StateSchema> = {
      profile: {
        error: 'Ошибка',
      },
    };
    expect(getProfileError(initialStore as StateSchema)).toEqual('Ошибка');
  });

  test('get empty state', () => {
    const initialStore: DeepPartial<StateSchema> = {};
    expect(getProfileError(initialStore as StateSchema)).toEqual(undefined);
  });
});
