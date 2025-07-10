import type { Direction, IWeatherList } from "./WeatherList.type";

import { wrap } from "motion";

const useWeatherSlider = (items: IWeatherList["items"]) => {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [direction, setDirection] = useState<Direction>(1);

  const selectedItem = items[selectedIndex];

  const setSlide = (newDirection: 1 | -1) => {
    const nextIndex = wrap(0, items.length, selectedIndex + newDirection);
    setSelectedIndex(nextIndex);
    setDirection(newDirection);
  };

  const goToNext = () => setSlide(1);
  const goToPrevious = () => setSlide(-1);

  return {
    direction,
    selectedItem,
    goToNext,
    goToPrevious,
  };
};

export default useWeatherSlider;
