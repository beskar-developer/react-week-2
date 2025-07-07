import type { GetWeatherParams, GetWeatherResponse, Repository as IRepository } from "@/types/Weather";

import client from "@/clients/Weather";

const DEFAULT_GET_WEATHER_PARAMS = { daily: ["weathercode", "temperature_2m_max", "temperature_2m_min"] };

class Repository implements IRepository {
  getWeather(params: GetWeatherParams) {
    return client.get<unknown, GetWeatherResponse>("", {
      params: { ...DEFAULT_GET_WEATHER_PARAMS, ...params },
    });
  }
}

export default new Repository();
