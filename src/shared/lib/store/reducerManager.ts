import {
  type AnyAction,
  type CombinedState,
  combineReducers,
  type ReducersMapObject,
} from '@reduxjs/toolkit';
import { type StateSchemaKeys } from '../../types/redux';
import { type Action } from 'redux';

export type Reducer<S = any, A extends Action = AnyAction> = (state: S, action: A) => S;

export function createReducerManager<T>(initialReducers: ReducersMapObject<T>) {
  const reducers: ReducersMapObject<T> = { ...initialReducers };

  let combinedReducer: Reducer = combineReducers(reducers);

  let keysToRemove: Array<StateSchemaKeys<T>> = [];

  return {
    getReducerMap: () => reducers,
    reduce: (state: CombinedState<T> | undefined, action: AnyAction) => {
      const s = { ...(state as CombinedState<T>) };
      if (keysToRemove.length > 0) {
        for (const key of keysToRemove) {
          delete s[key];
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
