import { counterActions, counterReducer, type CounterSchema } from '@/entities/Counter';
import { type DeepPartial } from '@reduxjs/toolkit';

describe('test counter slice', () => {
  const state: DeepPartial<CounterSchema> = { value: 10 };
  test('increment', () => {
    expect(counterReducer(state as CounterSchema, counterActions.increment())).toEqual({
      value: 11,
    });
  });

  test('decrement', () => {
    expect(counterReducer(state as CounterSchema, counterActions.decrement())).toEqual({
      value: 9,
    });
  });

  test('empty', () => {
    expect(counterReducer(undefined, counterActions.increment())).toEqual({
      value: 1,
    });
  });
});
