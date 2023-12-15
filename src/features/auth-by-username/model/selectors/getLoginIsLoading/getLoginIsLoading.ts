import { type StateSchema } from '@/app/providers/StoreProvider';

export const getLoginIsLoading = (state: StateSchema) =>
  Boolean(state.loginForm?.isLoading) || false;
