import type { Hotel } from '../types/HotelResponse';

export const getHotelsApi = async (
  city: string,
  checkIn: string,
  checkOut: string
): Promise<Hotel[]> => {
  const response = await fetch(
    `http://engine.hotellook.com/api/v2/cache.json?location=${city}&currency=rub&checkIn=${checkIn}&checkOut=${checkOut}&limit=10`,
    { referrerPolicy: 'unsafe-url' }
  );
  return await response.json();
};
