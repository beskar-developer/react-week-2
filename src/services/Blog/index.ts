import { Message } from "@shared-vendor/types";
import type { AddPayload, DeletePayload, EditPayload, GetByIdParams, IService } from "@/types/Blog";

import repository from "@/repositories/Blog";

import {
  addResponseSchema,
  deleteResponseSchema,
  editResponseSchema,
  getAllResponseSchema,
  getByIdResponseSchema,
} from "@/schemas/Blog";

class Service implements IService {
  @Message({ error: "خطا در دریافت پست ها" })
  async getAll() {
    const response = await repository.getAll();

    const parsedResponse = getAllResponseSchema.parse(response);

    return parsedResponse;
  }

  @Message({ error: "خطا در دریافت پست" })
  async getById(params: GetByIdParams) {
    const response = await repository.getById(params);

    const parsedResponse = getByIdResponseSchema.parse(response);

    return parsedResponse;
  }

  @Message({ error: "خطا در افزودن پست", success: "پست افزوده شد" })
  async add(payload: AddPayload) {
    const response = await repository.add(payload);

    const parsedResponse = addResponseSchema.parse(response);

    return parsedResponse;
  }

  @Message({ error: "خطا در ویرایش پست", success: "پست ویرایش شد" })
  async edit(payload: EditPayload) {
    const response = await repository.edit(payload);

    const parsedResponse = editResponseSchema.parse(response);

    return parsedResponse;
  }

  @Message({ error: "خطا در حذف پست", success: "پست حذف شد" })
  async delete(payload: DeletePayload) {
    const response = await repository.delete(payload);

    const parsedResponse = deleteResponseSchema.parse(response);

    return parsedResponse;
  }
}

export default new Service();
