import type { AddPayload, DeletePayload, EditPayload, GetByIdParams, IRepository, Post } from "@/types/Blog";

import client from "@/clients/Blog";

class Repository implements IRepository {
  getAll() {
    return client.get<unknown, Post[]>("");
  }

  getById(id: GetByIdParams) {
    return client.get<unknown, Post>(String(id));
  }

  add(payload: AddPayload) {
    return client.post<unknown, Post>("", payload);
  }

  edit(payload: EditPayload) {
    const { id, ...sanitizedPayload } = payload;

    return client.put<unknown, Post>(String(id), sanitizedPayload);
  }

  delete(id: DeletePayload) {
    return client.delete<unknown, Post>(String(id));
  }
}

export default new Repository();
