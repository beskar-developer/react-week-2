import type { Weather } from "@/types/Weather";

export interface IWeatherCard extends ComponentProps<"div">, Weather {}
