export interface Hotel {
  priceAvg: number;
  pricePercentile: Record<string, number>;
  hotelName: string;
  stars: number;
  locationId: number;
  hotelId: number;
  priceFrom: number;
  location: Location;
}
export interface Location {
  name: string;
  geo: {
    lat: number;
    lon: number;
  };
  state: number | null;
}
