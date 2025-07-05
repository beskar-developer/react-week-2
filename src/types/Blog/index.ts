import * as z from "zod/v4";

import { postSchema } from "@/schemas/Blog";

export type Post = z.infer<typeof postSchema>;

type PostPromise = Promise<Post>;

export type GetByIdPayload = Post["id"];
export type AddPayload = Omit<Post, "id">;
export type EditPayload = Post;
export type DeletePayload = Post["id"];

export interface Repository {
  getAll: () => Promise<Array<Post>>;
  getById: (id: GetByIdPayload) => PostPromise;
  add: (post: AddPayload) => PostPromise;
  edit: (post: EditPayload) => PostPromise;
  delete: (id: DeletePayload) => PostPromise;
}

export type Service = Repository;

export type PostAction = "ADD" | "EDIT" | "DELETE" | "DETAILS";
