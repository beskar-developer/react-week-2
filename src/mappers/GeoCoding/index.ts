/* eslint-disable camelcase */
import type { GetCityByNameResponse } from "@/types/GeoCoding";

class Mapper {
  static toGetCityByNameParams(name: string) {
    return { name };
  }

  static toGetCityByNameResponse(response: GetCityByNameResponse) {
    const { results } = response;
    const { country_code, ...mostLikelyCity } = results[0];

    return { ...mostLikelyCity, countryCode: country_code };
  }
}

export default Mapper;
