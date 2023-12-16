import { type StateSchema } from '@/app/providers/StoreProvider';

export const getProfileIsLoading = (state: StateSchema) =>
  Boolean(state.profile?.isLoading) || false;
