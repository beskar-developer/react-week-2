import * as z from "zod/v4";

export const postSchema = z
  .object({
    id: z.coerce.number().nonnegative().nonoptional(),
    title: z.string().nonoptional(),
    content: z.string().nonoptional(),
  })
  .nonoptional();

export const getAllResponseSchema = z.array(postSchema).nonoptional();
export const getByIdResponseSchema = postSchema;
export const addResponseSchema = postSchema;
export const editResponseSchema = postSchema;
export const deleteResponseSchema = postSchema;
