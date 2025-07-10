import type { IWeatherList } from "./WeatherList.type";

const useWeatherList = (items: IWeatherList["items"]) => {
  const itemCount = items.length;

  return { itemCount };
};

export default useWeatherList;
