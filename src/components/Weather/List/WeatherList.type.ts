import type { Weather } from "@/types/Weather";

export interface IWeatherList {
  items: Weather[];
  cityName?: string;
  loading?: boolean;
}

export type Direction = 1 | -1;
