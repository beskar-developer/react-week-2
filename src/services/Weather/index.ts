import { AutoBind, Message } from "@shared-vendor/types";
import type { GetWeatherByGeoCodingParams, IService } from "@/types/Weather";

import repository from "@/repositories/Weather";

import mapper from "@/mappers/Weather";

import { getWeatherResponseSchema } from "@/schemas/Weather";

import geoCodingService from "@/services/GeoCoding";

class Service implements IService {
  @Message({ error: "خطا در گرفتن وضعیت آب و هوا" })
  async getWeatherByGeoCoding(params: GetWeatherByGeoCodingParams) {
    const response = await repository.getWeather(params);

    const parsedResponse = getWeatherResponseSchema.parse(response);

    return mapper.toGetWeatherByGeoCodingResponse(parsedResponse);
  }

  @AutoBind
  async getWeatherByCityName(name: string) {
    const geoCodingResponse = await geoCodingService.getCityByName(name);

    const { latitude, longitude } = geoCodingResponse;

    const response = await this.getWeatherByGeoCoding({ latitude, longitude });

    return mapper.toGetWeatherByCityNameResponse(response, geoCodingResponse);
  }
}

export default new Service();
