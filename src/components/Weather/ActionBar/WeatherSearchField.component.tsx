import type { IWeatherActionBar } from "./WeatherActionBar.type";

const WeatherSearchField = ({ searchedValue, onSearchedValueChange }: IWeatherActionBar) => {
  return (
    <TextField
      label="شهر"
      name="city"
      placeholder="نام شهر را وارد کنید..."
      value={searchedValue}
      onChange={(event) => onSearchedValueChange(event.target.value)}
    />
  );
};

export default WeatherSearchField;
