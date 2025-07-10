import type { IWeatherActionBar } from "./WeatherActionBar.type";

import WeatherActionHeader from "./WeatherActionHeader.component";
import WeatherSearchField from "./WeatherSearchField.component";

const ActionBar = ({ searchedValue, onSearchedValueChange }: IWeatherActionBar) => {
  return (
    <>
      <WeatherActionHeader />

      <ThemeToggleButton />

      <WeatherSearchField searchedValue={searchedValue} onSearchedValueChange={onSearchedValueChange} />
    </>
  );
};

export default ActionBar;
