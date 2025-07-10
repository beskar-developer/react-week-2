import type { IWeatherCard } from "./WeatherCard.type";

const WeatherTodayBadge = ({ isToday }: Pick<IWeatherCard, "isToday">) => {
  if (!isToday) return <></>;

  return <span className="rounded-md bg-emerald-500 p-0.5 text-emerald-50">امروز</span>;
};

export default WeatherTodayBadge;
