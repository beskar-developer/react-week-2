import type {
  GetCityByNameParams,
  GetCityByNameResponse,
  Repository as IRepository,
} from "@/types/GeoCoding";

import client from "@/clients/GeoCoding";

class Repository implements IRepository {
  getCityByName(payload: GetCityByNameParams) {
    return client.get<unknown, GetCityByNameResponse>("", { params: payload });
  }
}

export default new Repository();
