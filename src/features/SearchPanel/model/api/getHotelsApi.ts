import type { HotelsResponse } from '../types/HotelResponse';

export const getHotelsApi = async (city: string): Promise<HotelsResponse> => {
  const response = await fetch(
    `http://engine.hotellook.com/api/v2/lookup.json?query=${city}&lang=ru&lookFor=both`
  );
  return await response.json();
};
