import { Provider } from 'react-redux';
import { type PropsWithChildren } from 'react';
import { createReduxStore } from '../config/Store';
import { type StateSchema } from '../types/storeSchema';

interface StoreProviderProps {
  initialState?: StateSchema;
}

export function StoreProvider({ initialState, children }: PropsWithChildren<StoreProviderProps>) {
  const store = createReduxStore(initialState);
  return <Provider store={store}>{children}</Provider>;
}
