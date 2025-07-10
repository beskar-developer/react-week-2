import type { IWeatherCard } from "./WeatherCard.type";

import useWeatherCard from "./UseWeatherCard.hook";

import WeatherTypeIcon from "./WeatherTypeIcon.component";
import WeatherCardContent from "./WeatherCardContent.component";

const WeatherCard = ({ time, minTemperature, maxTemperature, type, isToday, ...props }: IWeatherCard) => {
  const { animationConfig } = useWeatherCard();

  return (
    <motion.div className="size-full" {...animationConfig} {...props}>
      <Card className="flex size-full justify-between bg-indigo-50 px-2 py-3 text-xs dark:bg-gray-700">
        <WeatherTypeIcon type={type} />

        <WeatherCardContent
          time={time}
          minTemperature={minTemperature}
          maxTemperature={maxTemperature}
          isToday={isToday}
        />
      </Card>
    </motion.div>
  );
};

export default WeatherCard;
