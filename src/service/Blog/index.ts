import { ErrorMessage } from "@shared-vendor/types";
import type {
  AddPayload,
  DeletePayload,
  EditPayload,
  GetByIdPayload,
  Service as IService,
} from "@/types/Blog";

import repository from "@/repositories/Blog";

import {
  addResponseSchema,
  deleteResponseSchema,
  editResponseSchema,
  getAllResponseSchema,
  getByIdResponseSchema,
} from "@/schemas/Blog";

class Service implements IService {
  @ErrorMessage("خطا در دریافت پست ها")
  async getAll() {
    const response = await repository.getAll();

    const parsedResponse = getAllResponseSchema.parse(response);

    return parsedResponse;
  }

  @ErrorMessage("خطا در دریافت پست")
  async getById(payload: GetByIdPayload) {
    const response = await repository.getById(payload);

    const parsedResponse = getByIdResponseSchema.parse(response);

    return parsedResponse;
  }

  @ErrorMessage("خطا در افزودن پست")
  async add(payload: AddPayload) {
    const response = await repository.add(payload);

    const parsedResponse = addResponseSchema.parse(response);

    return parsedResponse;
  }

  @ErrorMessage("خطا در ویرایش پست")
  async edit(payload: EditPayload) {
    const response = await repository.edit(payload);

    const parsedResponse = editResponseSchema.parse(response);

    return parsedResponse;
  }

  @ErrorMessage("خطا در حذف پست")
  async delete(payload: DeletePayload) {
    const response = await repository.delete(payload);

    const parsedResponse = deleteResponseSchema.parse(response);

    return parsedResponse;
  }
}

export default new Service();
