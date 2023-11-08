import { type PropsWithChildren, useEffect } from 'react';
import { useDispatch, useStore } from 'react-redux';
import {
  type AsyncReducers,
  type ReduxStoreWithManager,
  type StateSchemaKeys,
} from '@/shared/types/redux';
import { type Reducer } from '@reduxjs/toolkit';
import { type StateSchema } from '@/app/providers/StoreProvider';

interface DynamicModuleLoaderProps {
  reducers: AsyncReducers<StateSchema>;
  removeAfterUnmount?: boolean;
}
// TODO сделать обобщенный тип вместо StateSchema
export function DynamicModuleLoader(props: PropsWithChildren<DynamicModuleLoaderProps>) {
  const { reducers, children, removeAfterUnmount = false } = props;
  const store = useStore() as ReduxStoreWithManager<StateSchema>;
  const dispatch = useDispatch();

  useEffect(() => {
    Object.entries(reducers).forEach(([name, reducer]: [StateSchemaKeys<StateSchema>, Reducer]) => {
      store.reducerManager.add(name, reducer);
      dispatch({ type: `@INIT ${name}` });
    });

    return () => {
      if (removeAfterUnmount) {
        Object.keys(reducers).forEach((name: StateSchemaKeys<StateSchema>) => {
          store.reducerManager.remove(name);
          dispatch({ type: `@DESTROY ${name}` });
        });
      }
    };
  }, []);

  return children;
}
