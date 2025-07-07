import type { Props as ButtonProps } from "@shared-vendor/components/Button/BaseButton.type";
import type { Props } from "./WeatherList.type";

import useWeatherList from "./UseWeatherList.hook";

import { AiOutlineArrowLeft, AiOutlineArrowRight } from "react-icons/ai";
import { WeatherCard } from "@/components/Weather";

const DEFAULT_BUTTON_PROPS: ButtonProps = {
  className: "shrink-0",
  variant: "text",
  icon: true,
};

const WeatherList = ({ items, cityName }: Props) => {
  const { direction, selectedItem, goToNext, goToPrevious } = useWeatherList(items);

  return (
    <NotFoundContainer message="لطفا نام شهر را جستجو کنید" itemCount={items.length}>
      {cityName && (
        <span className="text-xs">
          نتایح جستجو برای <strong className="text-base text-indigo-500">{cityName}</strong>
        </span>
      )}

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
    </NotFoundContainer>
  );
};

export default WeatherList;
