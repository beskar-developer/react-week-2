import * as z from "zod/v4";

export const citySchema = z.object({
  id: z.number().nonnegative().nonoptional(),
  name: z.string().nonoptional(),
  latitude: z.number().nonoptional(),
  longitude: z.number().nonoptional(),
  elevation: z.number().nonoptional(),
  country: z.string().nonoptional(),
  country_code: z.string().nonoptional(),
  timezone: z.string().nonoptional(),
});

export const getCityByNameResponseSchema = z
  .object({
    results: z.array(citySchema),
  })
  .nonoptional();
