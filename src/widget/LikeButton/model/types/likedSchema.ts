import type { Hotel } from '../../../../features/SearchPanel/model/types/HotelResponse';

export interface LikedSchema {
  liked: FavoriteHotel[];
}

export interface FavoriteHotel {
  hotel: Hotel;
  bookingDate: string;
  bookingCount: string;
}
