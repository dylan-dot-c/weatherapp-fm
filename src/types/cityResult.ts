export interface CityResult {
  id: number;
  name: string;
  country: string;
  country_code: string;
  country_id: number;
  latitude: number;
  longitude: number;
  elevation?: number;
  timezone: string;
  feature_code?: string;
  admin1?: string;
  admin1_id?: number;
  admin2?: string;
  admin2_id?: number;
  admin3?: string;
  admin3_id?: number;
}
