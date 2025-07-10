import type { IWeatherList } from "./WeatherList.type";

import useWeatherList from "./UseWeatherList.hook";

import WeatherCity from "./WeatherCity.component";
import WeatherSlider from "./WeatherSlider.component";

const WeatherList = ({ items, cityName, loading }: IWeatherList) => {
  const { itemCount } = useWeatherList(items);

  return (
    <LoadingContainer message="در حال گرفتن وضعیت آب و هوا" loading={loading}>
      <NotFoundContainer message="لطفا نام شهر را جستجو کنید" itemCount={itemCount}>
        <WeatherCity cityName={cityName} />

        <WeatherSlider items={items} />
      </NotFoundContainer>
    </LoadingContainer>
  );
};

export default WeatherList;
