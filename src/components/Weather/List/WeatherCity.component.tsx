import type { IWeatherList } from "./WeatherList.type";

const WeatherCity = ({ cityName }: Pick<IWeatherList, "cityName">) => {
  if (!cityName) return <></>;

  return (
    <span className="text-xs">
      نتایح جستجو برای <strong className="text-base text-indigo-500">{cityName}</strong>
    </span>
  );
};

export default WeatherCity;
