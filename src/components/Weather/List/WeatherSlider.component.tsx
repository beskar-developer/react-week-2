import type { Props as ButtonProps } from "@shared-vendor/components/Button/BaseButton.type";
import type { IWeatherList } from "./WeatherList.type";

import useWeatherSlider from "./UseWeatherSlider.hook";

import { AiOutlineArrowLeft, AiOutlineArrowRight } from "react-icons/ai";
import { WeatherCard } from "@/components/Weather";

const DEFAULT_BUTTON_PROPS: ButtonProps = {
  className: "shrink-0",
  variant: "text",
  icon: true,
};

const WeatherSlider = ({ items }: Pick<IWeatherList, "items">) => {
  const { direction, selectedItem, goToNext, goToPrevious } = useWeatherSlider(items);

  return (
    <div className="relative flex items-center justify-center gap-4">
      <BaseButton onClick={goToNext} {...DEFAULT_BUTTON_PROPS}>
        <AiOutlineArrowRight />
      </BaseButton>

      <AnimatePresence custom={direction} initial={false} mode="popLayout">
        <WeatherCard key={selectedItem?.time} {...selectedItem} />
      </AnimatePresence>

      <BaseButton onClick={goToPrevious} {...DEFAULT_BUTTON_PROPS}>
        <AiOutlineArrowLeft />
      </BaseButton>
    </div>
  );
};

export default WeatherSlider;
