import type { IWeatherCard } from "./WeatherCard.type";

import WeatherTemperature from "./WeatherTemperature.component";
import WeatherTime from "./WeatherTime.component";

const WeatherCardContent = ({
  time,
  minTemperature,
  maxTemperature,
  isToday,
}: Omit<IWeatherCard, "type" | "code">) => {
  return (
    <div className="flex flex-col items-end gap-4">
      <WeatherTemperature minTemperature={minTemperature} maxTemperature={maxTemperature} />

      <WeatherTime time={time} isToday={isToday} />
    </div>
  );
};

export default WeatherCardContent;
