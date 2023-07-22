import type { StateSchema } from '@/app/providers/StoreProvider';

export const getIsLoading = (state: StateSchema): boolean =>
  state.hotels.isLoading;
