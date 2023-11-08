import {
  type AnyAction,
  type CombinedState,
  combineReducers,
  type Reducer,
  type ReducersMapObject,
} from '@reduxjs/toolkit';
import { type StateSchemaKeys } from '../../types/redux';

export function createReducerManager<T>(initialReducers: ReducersMapObject<T>) {
  const reducers: ReducersMapObject<T> = { ...initialReducers };

  let combinedReducer = combineReducers(reducers);

  let keysToRemove: Array<StateSchemaKeys<T>> = [];

  return {
    getReducerMap: () => reducers,
    reduce: (state: CombinedState<T>, action: AnyAction) => {
      if (keysToRemove.length > 0) {
        state = { ...state };
        for (const key of keysToRemove) {
          delete state[key];
        }
        keysToRemove = [];
      }

      return combinedReducer(state, action);
    },

    add: (key: StateSchemaKeys<T>, reducer: Reducer) => {
      if (reducers[key] != null) {
        return;
      }
      reducers[key] = reducer;

      combinedReducer = combineReducers(reducers);
    },

    remove: (key: StateSchemaKeys<T>) => {
      if (reducers[key] == null) {
        return;
      }

      delete reducers[key];

      keysToRemove.push(key);

      combinedReducer = combineReducers(reducers);
    },
  };
}
