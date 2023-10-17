import { type StateSchema } from '@/app/providers/StoreProvider';
import { getCounterValue } from '@/entities/Counter/model/selectors/getCounterValue/getCounterValue';
import { type DeepPartial } from '@reduxjs/toolkit';

describe('get counter value', () => {
  test('get value', () => {
    const initialStore: DeepPartial<StateSchema> = {
      counter: { value: 0 },
    };
    expect(getCounterValue(initialStore as StateSchema)).toEqual(0);
  });
});
