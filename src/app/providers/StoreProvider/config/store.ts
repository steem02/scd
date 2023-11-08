import { configureStore, type ReducersMapObject } from '@reduxjs/toolkit';
import { type StateSchema } from '../types/StateSchema';
import { counterReducer } from '@/entities/Counter';
import { userReducer } from '@/entities/User';
import { type TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';
import { createReducerManager } from '@/shared/lib/store/reducerManager';

export const createReduxStore = (
  initialState?: StateSchema,
  asyncReducers?: ReducersMapObject<StateSchema>
) => {
  const rootReducers: ReducersMapObject<StateSchema> = {
    ...asyncReducers,
    counter: counterReducer,
    user: userReducer,
  };
  const reducerManager = createReducerManager(rootReducers);

  const store = configureStore<StateSchema>({
    reducer: reducerManager.reduce,
    devTools: __IS_DEV__,
    preloadedState: initialState,
  });
  // @ts-expect-error потом
  store.reducerManager = reducerManager;

  return store;
};

export type AppStore = ReturnType<typeof createReduxStore>;
export type RootState = ReturnType<AppStore['getState']>;
export type AppDispatch = AppStore['dispatch'];

// export const useAppDispatch = () => useDispatch<ReturnType<typeof createReduxStore>['dispatch']>();
export const useAppDispatch = () => useDispatch<AppStore['dispatch']>();
// export const useAppDispatch = () => useDispatch<ThunkDispatch<StateSchema, any, AnyAction>>();

export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
