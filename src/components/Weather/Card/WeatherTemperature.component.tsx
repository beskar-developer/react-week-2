import type { IWeatherCard } from "./WeatherCard.type";

import { WiCelsius } from "react-icons/wi";

const WeatherTemperature = ({
  maxTemperature,
  minTemperature,
}: Pick<IWeatherCard, "maxTemperature" | "minTemperature">) => {
  return (
    <p className="flex items-center font-extrabold text-gray-400 dark:text-gray-300">
      <WiCelsius className="size-7 text-gray-500 dark:text-gray-400" />

      <span>
        {maxTemperature} - {minTemperature}
      </span>
    </p>
  );
};

export default WeatherTemperature;
