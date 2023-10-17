import { getCounter } from '@/entities/Counter/model/selectors/getCounter/getCounter';
import { createSelector } from '@reduxjs/toolkit';
import { type CounterSchema } from '@/entities/Counter';

export const getCounterValue = createSelector(
  getCounter,
  (counter: CounterSchema) => counter.value
);
