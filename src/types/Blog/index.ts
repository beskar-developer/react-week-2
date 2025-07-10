import * as z from "zod/v4";

import { postSchema } from "@/schemas/Blog";

export type Post = z.infer<typeof postSchema>;

type PostPromise = Promise<Post>;

export type GetByIdParams = Post["id"];
export type AddPayload = Omit<Post, "id">;
export type EditPayload = Post;
export type DeletePayload = Post["id"];

export interface IRepository {
  getAll: () => Promise<Array<Post>>;
  getById: (id: GetByIdParams) => PostPromise;
  add: (post: AddPayload) => PostPromise;
  edit: (post: EditPayload) => PostPromise;
  delete: (id: DeletePayload) => PostPromise;
}

export type IService = IRepository;

export type PostAction = "ADD" | "EDIT" | "DELETE" | "DETAILS";

export type OnActionClick = (id: Post["id"], name: PostAction) => void;
