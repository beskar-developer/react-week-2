import type { Weather } from "@/types/Weather";

export interface Props {
  items: Weather[];
  cityName?: string;
}

export type Direction = 1 | -1;
