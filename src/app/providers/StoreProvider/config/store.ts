import { configureStore, type ReducersMapObject } from '@reduxjs/toolkit';
import { type StateSchema } from '../types/StateSchema';
import { counterReducer } from '@/entities/Counter';
import { userReducer } from '@/entities/User';
import { loginReducer } from '@/features/auth-by-username';
import { type TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';

export const createReduxStore = (initialState?: StateSchema) => {
  const rootReducers: ReducersMapObject<StateSchema> = {
    counter: counterReducer,
    user: userReducer,
    loginForm: loginReducer,
  };

  return configureStore({
    reducer: rootReducers,
    devTools: __IS_DEV__,
    preloadedState: initialState,
  });
};

export type AppStore = ReturnType<typeof createReduxStore>;
export type RootState = ReturnType<AppStore['getState']>;
export type AppDispatch = AppStore['dispatch'];

// export const useAppDispatch = () => useDispatch<ReturnType<typeof createReduxStore>['dispatch']>();
export const useAppDispatch = () => useDispatch<AppStore['dispatch']>();
// export const useAppDispatch = () => useDispatch<ThunkDispatch<StateSchema, any, AnyAction>>();

export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
