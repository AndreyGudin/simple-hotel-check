import type { StateSchema } from '../../../../../app/providers/StoreProvider';
import type { FavoriteHotel } from '../../types/likedSchema';

export const getFavoriteHotels = (state: StateSchema): FavoriteHotel[] =>
  state.favorite.liked;
