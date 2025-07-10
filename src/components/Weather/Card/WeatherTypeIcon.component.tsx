import type { IconType } from "react-icons";
import type { WeatherType } from "@/types/Weather";

import {
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

interface IWeatherTypeIcon {
  type: WeatherType;
}

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

const WeatherStatusIcon = ({ type }: IWeatherTypeIcon) => {
  const Icon = ICON_MAP[type];

  return <Icon className="size-20 text-indigo-400" />;
};

export default WeatherStatusIcon;
