import type { StateSchema } from '../../../../../app/providers/StoreProvider';
import type { Hotel } from '../../types/HotelResponse';

export const getHotelsData = (state: StateSchema): Hotel[] =>
  state.hotels.values;
