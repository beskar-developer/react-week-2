import * as z from "zod/v4";

const weatherCodeSchema = z.literal([
  0, 1, 2, 3, 45, 48, 51, 53, 55, 56, 57, 61, 63, 65, 66, 67, 71, 73, 75, 77, 80, 81, 82, 85, 86, 95, 96, 99,
]);

export const weatherSchema = z.object({
  time: z.array(z.iso.date()).nonoptional(),
  weathercode: z.array(weatherCodeSchema).nonoptional(),
  temperature_2m_max: z.array(z.number()).nonoptional(),
  temperature_2m_min: z.array(z.number()).nonoptional(),
});

export const getWeatherResponseSchema = z.object({
  daily: weatherSchema.nonoptional(),
});
