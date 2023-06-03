import type { Hotel } from '../../../../features/SearchPanel/model/types/HotelResponse';

export enum SortType {
  RATE = 'rate',
  PRICE = 'price'
}

export interface LikedSchema {
  liked: FavoriteHotel[];
  sortType?: SortType;
}

export interface FavoriteHotel {
  hotel: Hotel;
  bookingDate: string;
  bookingCount: string;
}
