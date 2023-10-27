import { configureStore, type ReducersMapObject } from '@reduxjs/toolkit';
import { type StateSchema } from '../types/StateSchema';
import { counterReducer } from '@/entities/Counter';
import { userReducer } from '@/entities/User';

export const createReduxStore = (initialState?: StateSchema) => {
  const rootReducers: ReducersMapObject<StateSchema> = {
    counter: counterReducer,
    user: userReducer,
  };

  return configureStore({
    reducer: rootReducers,
    devTools: __IS_DEV__,
    preloadedState: initialState,
  });
};

// export type RootState = ReturnType<typeof store.getState>;
// export type AppDispatch = typeof store.dispatch;
