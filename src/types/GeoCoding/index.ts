import * as z from "zod/v4";

import { citySchema, getCityByNameResponseSchema } from "@/schemas/GeoCoding";

export type GetCityByNameParams = { name: string };
export type GetCityByNameResponse = z.infer<typeof getCityByNameResponseSchema>;

export interface Repository {
  getCityByName: (params: GetCityByNameParams) => Promise<GetCityByNameResponse>;
}

type CitySchema = z.infer<typeof citySchema>;
export type City = Omit<CitySchema, "country_code"> & { countryCode: CitySchema["country_code"] };

export interface Service {
  getCityByName: (name: string) => Promise<City>;
}
