import type { IWeatherCard } from "./WeatherCard.type";

import WeatherTodayBadge from "./WeatherTodayBadge.component";

const WeatherTime = ({ isToday, time }: Pick<IWeatherCard, "isToday" | "time">) => {
  return (
    <p className="flex items-center gap-2 font-bold">
      <WeatherTodayBadge isToday={isToday} />

      <span>{time}</span>
    </p>
  );
};

export default WeatherTime;
