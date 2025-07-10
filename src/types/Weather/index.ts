import type { City } from "@/types/GeoCoding";

import * as z from "zod/v4";

import { getWeatherResponseSchema, weatherSchema } from "@/schemas/Weather";

type ElementType<T extends unknown[]> = T[number];

export type GetWeatherParams = {
  latitude: number;
  longitude: number;
};
export type GetWeatherResponse = z.infer<typeof getWeatherResponseSchema>;

export interface IRepository {
  getWeather: (params: GetWeatherParams) => Promise<GetWeatherResponse>;
}

type weatherSchema = z.infer<typeof weatherSchema>;
export type WeatherType =
  | "CLEAR"
  | "MAINLY_CLEAR"
  | "FOG"
  | "DRIZZLE"
  | "FREEZING_DRIZZLE"
  | "RAIN"
  | "FREEZING_RAIN"
  | "SNOW_FALL"
  | "SNOW_GRAINS"
  | "RAIN_SHOWERS"
  | "SNOW_SHOWERS"
  | "THUNDERSTORM";

export type WeatherCode = ElementType<weatherSchema["weathercode"]>;

export type Weather = {
  time: ElementType<weatherSchema["time"]>;
  code: WeatherCode;
  type: WeatherType;
  minTemperature: ElementType<weatherSchema["temperature_2m_min"]>;
  maxTemperature: ElementType<weatherSchema["temperature_2m_max"]>;
  isToday: boolean;
};

export type GetWeatherByGeoCodingParams = GetWeatherParams;
export interface IService {
  getWeatherByGeoCoding: (params: GetWeatherByGeoCodingParams) => Promise<Weather[]>;
  getWeatherByCityName: (name: string) => Promise<{
    weather: Weather[];
    city: City;
  }>;
}
