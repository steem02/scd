import { Provider } from 'react-redux';
import { type PropsWithChildren } from 'react';
import { createReduxStore } from '../config/store';
import { type StateSchema } from '../types/StateSchema';
import { type ReducersMapObject } from '@reduxjs/toolkit';
import { type DeepPartial } from '@/shared/types/redux';

interface StoreProviderProps {
  initialState?: DeepPartial<StateSchema>;
  asyncReducers?: DeepPartial<ReducersMapObject<StateSchema>>;
}

export function StoreProvider({
  initialState,
  children,
  asyncReducers,
}: PropsWithChildren<StoreProviderProps>) {
  const store = createReduxStore(
    initialState as StateSchema,
    asyncReducers as ReducersMapObject<StateSchema>
  );
  return <Provider store={store}>{children}</Provider>;
}
