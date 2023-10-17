import { configureStore } from '@reduxjs/toolkit';
import { type StateSchema } from '../types/storeSchema';
import { counterReducer } from '@/entities/Counter';

export const createReduxStore = (initialState?: StateSchema) =>
  configureStore({
    reducer: {
      counter: counterReducer,
    },
    devTools: __IS_DEV__,
    preloadedState: initialState,
  });

// export type RootState = ReturnType<typeof store.getState>;
// export type AppDispatch = typeof store.dispatch;
