import { type DeepPartial } from '@/shared/types/redux';
import { type StateSchema } from '@/app/providers/StoreProvider';
import { getLoginIsLoading } from './getLoginIsLoading';

describe('check get loading selector', () => {
  test('should return loading status', () => {
    const initialStore: DeepPartial<StateSchema> = {
      loginForm: {
        isLoading: true,
      },
    };
    expect(getLoginIsLoading(initialStore as StateSchema)).toEqual(true);
  });

  test('should work with empty state', () => {
    const initialStore: DeepPartial<StateSchema> = {};
    expect(getLoginIsLoading(initialStore as StateSchema)).toEqual(false);
  });
});
