import {
  type AnyAction,
  type EnhancedStore,
  type Reducer,
  type ReducersMapObject,
} from '@reduxjs/toolkit';

export type DeepPartial<T> = T extends object ? { [P in keyof T]?: DeepPartial<T[P]> } : T;

export type StateSchemaKeys<S> = keyof S;

export interface ReducerManagerType<S> {
  getReducerMap(): ReducersMapObject<S>;
  reduce(state: S, action: AnyAction): S;
  add(key: StateSchemaKeys<S>, reducer: Reducer): void;
  remove(key: StateSchemaKeys<S>): void;
}

export interface ReduxStoreWithManager<S> extends EnhancedStore<S> {
  reducerManager: ReducerManagerType<S>;
}

export type AsyncReducers<S> = {
  [name in StateSchemaKeys<S>]?: Reducer;
};
