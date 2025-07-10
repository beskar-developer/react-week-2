import { Message } from "@shared-vendor/types";
import type { IService } from "@/types/GeoCoding";

import repository from "@/repositories/GeoCoding";

import mapper from "@/mappers/GeoCoding";

import { getCityByNameResponseSchema } from "@/schemas/GeoCoding";

class Service implements IService {
  @Message({ error: "خطا در پیدا کردن شهر" })
  async getCityByName(name: string) {
    const response = await repository.getCityByName(mapper.toGetCityByNameParams(name));

    const parsedResponse = getCityByNameResponseSchema.parse(response);

    return mapper.toGetCityByNameResponse(parsedResponse);
  }
}

export default new Service();
