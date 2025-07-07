import type { Weather, WeatherType } from "@/types/Weather";
import type { IconType } from "react-icons";

import { usePresenceData } from "motion/react";

import {
  WiCelsius,
  WiDaySunny,
  WiFog,
  WiRain,
  WiRainMix,
  WiRainWind,
  WiSnow,
  WiSnowWind,
  WiSprinkle,
  WiThunderstorm,
} from "react-icons/wi";

interface Props extends ComponentProps<"div">, Weather {}

const ICON_MAP: Record<WeatherType, IconType> = {
  CLEAR: WiDaySunny,
  MAINLY_CLEAR: WiDaySunny,
  FOG: WiFog,
  DRIZZLE: WiSprinkle,
  FREEZING_DRIZZLE: WiSprinkle,
  RAIN: WiRain,
  FREEZING_RAIN: WiRainMix,
  SNOW_FALL: WiSnow,
  SNOW_GRAINS: WiSnow,
  RAIN_SHOWERS: WiRainWind,
  SNOW_SHOWERS: WiSnowWind,
  THUNDERSTORM: WiThunderstorm,
};

const WeatherCard = ({ time, minTemperature, maxTemperature, type, isToday, ...props }: Props) => {
  const direction = usePresenceData();

  const animationConfig: MotionProps = {
    initial: { opacity: 0, x: direction * 50 },
    animate: {
      opacity: 1,
      x: 0,
      transition: {
        delay: 0.2,
        type: "spring",
        visualDuration: 0.3,
        bounce: 0.4,
      },
    },
    exit: { opacity: 0, x: direction * -50 },
  };

  const Icon = ICON_MAP[type];

  return (
    <motion.div className="size-full" {...animationConfig} {...props}>
      <Card className="flex size-full justify-between bg-indigo-50 px-2 py-3 text-xs dark:bg-gray-700">
        <Icon className="size-20 text-indigo-400" />

        <div className="flex flex-col items-end gap-4">
          <p className="flex items-center gap-2 font-bold">
            {isToday && <span className="rounded-md bg-emerald-500 p-0.5 text-emerald-50">امروز</span>}

            <span>{time}</span>
          </p>

          <p className="flex items-center font-extrabold text-gray-400 dark:text-gray-300">
            <WiCelsius className="size-7 text-gray-500 dark:text-gray-400" />

            <span>
              {maxTemperature} - {minTemperature}
            </span>
          </p>
        </div>
      </Card>
    </motion.div>
  );
};

export default WeatherCard;
