export interface HotelsResponse {
  results: {
    locations: Locations[];
    hotels: Hotels[];
  };
  status: string;
}

export interface Hotels {
  label: string;
  locationName: string;
  locationId: string;
  id: string;
  fullName: string;
  location: {
    lat: string;
    lon: string;
  };
}
export interface Locations {
  cityName: string;
  fullName: string;
  countryCode: string;
  countryName: string;
  iata: string[];
  id: string;
  hotelsCount: string;
  location: {
    lat: string;
    lon: string;
  };
  _score: number;
}
