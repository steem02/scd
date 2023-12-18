import { type DeepPartial } from '@/shared/types/redux';
import { type StateSchema } from '@/app/providers/StoreProvider';
import { getProfileIsLoading } from './getProfileIsLoading';

describe('check get loading selector', () => {
  test('should return loading status', () => {
    const initialStore: DeepPartial<StateSchema> = {
      profile: {
        isLoading: true,
      },
    };
    expect(getProfileIsLoading(initialStore as StateSchema)).toEqual(true);
  });

  test('should work with empty state', () => {
    const initialStore: DeepPartial<StateSchema> = {};
    expect(getProfileIsLoading(initialStore as StateSchema)).toEqual(false);
  });
});
