import type { StateSchema } from '../../../../../app/providers/StoreProvider';
import type { SortType } from '../../types/likedSchema';

export const getFavoriteSortType = (state: StateSchema): SortType | undefined =>
  state.favorite.sortType;
