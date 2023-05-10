import type { Hotel } from './HotelResponse';

export interface HotelsSchema {
  values: Hotel[];
  checkIn: string;
  count: string;
  city: string;
}

export interface SearchData {
  city: string;
  checkIn: string;
  count: string;
}
