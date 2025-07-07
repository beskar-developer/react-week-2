import type { City } from "@/types/GeoCoding";
import type { GetWeatherResponse, Weather, WeatherCode, WeatherType } from "@/types/Weather";

import { FULL_DATE_FORMAT } from "@shared-vendor/constants";

import { format, isToday } from "date-fns-jalali";

type TypeToCodeMap = Record<WeatherType, WeatherCode[]>;
type CodeToTypeMap = Record<WeatherCode, WeatherType>;

const TYPE_TO_CODE_MAP: TypeToCodeMap = {
  CLEAR: [0],
  MAINLY_CLEAR: [1, 2, 3],
  FOG: [45, 48],
  DRIZZLE: [51, 53, 55],
  FREEZING_DRIZZLE: [56, 57],
  RAIN: [61, 63, 65],
  FREEZING_RAIN: [66, 67],
  SNOW_FALL: [71, 73, 75],
  SNOW_GRAINS: [77],
  RAIN_SHOWERS: [80, 81, 82],
  SNOW_SHOWERS: [85, 86],
  THUNDERSTORM: [95, 96, 99],
};

const convertCodesToTypeMap = (codes: WeatherCode[], type: WeatherType) =>
  codes.reduce(
    (acc, code) => ({
      ...acc,
      [code]: type,
    }),
    {},
  );
const createCodeToTypeMap = () =>
  Object.entries(TYPE_TO_CODE_MAP).reduce(
    (map, [type, codes]) => ({
      ...map,
      ...convertCodesToTypeMap(codes, type as WeatherType),
    }),
    {} as CodeToTypeMap,
  );

const CODE_TO_TYPE_MAP: CodeToTypeMap = createCodeToTypeMap();

class Mapper {
  static toGetWeatherByGeoCodingResponse(response: GetWeatherResponse) {
    const { daily } = response;

    const weatherList = daily.time.reduce((acc, time, index) => {
      const code = daily.weathercode[index];

      const weather = {
        time: format(time, FULL_DATE_FORMAT),
        isToday: isToday(time),
        code,
        minTemperature: daily.temperature_2m_min[index],
        maxTemperature: daily.temperature_2m_max[index],
        type: CODE_TO_TYPE_MAP[code],
      };

      return [...acc, weather];
    }, [] as Weather[]);

    return weatherList;
  }

  static toGetWeatherByCityNameResponse(weatherResponse: Weather[], geoCodingResponse: City) {
    return {
      weather: weatherResponse,
      city: geoCodingResponse,
    };
  }
}

export default Mapper;
