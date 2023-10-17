import { type StateSchema } from '@/app/providers/StoreProvider';
import { getCounter } from './getCounter';
import { type DeepPartial } from '@reduxjs/toolkit';

describe('get counter value', () => {
  const initialStore: DeepPartial<StateSchema> = {
    counter: { value: 0 },
  };
  test('get state', () => {
    expect(getCounter(initialStore as StateSchema)).toEqual({ value: 0 });
  });
});
