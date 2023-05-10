import type { StateSchema } from '../../../../../app/providers/StoreProvider';
import type { SearchData } from '../../types/HotelsSchema';

export const getHotelsSearchData = (state: StateSchema): SearchData => {
  return {
    city: state.hotels.city,
    checkIn: state.hotels.checkIn,
    count: state.hotels.count
  };
};
