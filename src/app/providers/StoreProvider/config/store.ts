import { configureStore, type ReducersMapObject } from '@reduxjs/toolkit';
import { type StateSchema, type ThunkExtraArgs } from '../types/StateSchema';
import { counterReducer } from '@/entities/Counter';
import { userReducer } from '@/entities/User';
import { type TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';
import { createReducerManager } from '@/shared/lib/store/reducerManager';
import { $api } from '@/shared/lib/api';
import type { To } from '@remix-run/router';
import type { NavigateOptions } from 'react-router';

export const createReduxStore = (
  initialState?: StateSchema,
  asyncReducers?: ReducersMapObject<StateSchema>,
  navigate?: (to: To, options?: NavigateOptions) => void
) => {
  const rootReducers: ReducersMapObject<StateSchema> = {
    ...asyncReducers,
    counter: counterReducer,
    user: userReducer,
  };
  const reducerManager = createReducerManager(rootReducers);

  const extraArgument: ThunkExtraArgs = {
    api: $api,
    navigate,
  };

  const store = configureStore({
    reducer: reducerManager.reduce,
    devTools: __IS_DEV__,
    preloadedState: initialState,
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware({
        thunk: {
          extraArgument,
        },
      }),
  });
  // @ts-expect-error потом
  store.reducerManager = reducerManager;

  return store;
};

export type AppStore = ReturnType<typeof createReduxStore>;
export type RootState = ReturnType<AppStore['getState']>;
export type AppDispatch = AppStore['dispatch'];

// export const useAppDispatch = () => useDispatch<ReturnType<typeof createReduxStore>['dispatch']>();
export const useAppDispatch = () => useDispatch<AppDispatch>();
// export const useAppDispatch = () => useDispatch<ThunkDispatch<StateSchema, any, AnyAction>>();

export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
