import type { Props as ButtonProps } from "@shared-vendor/components/Button/BaseButton.type";
import type { Weather } from "@/types/Weather";

import { wrap } from "motion";

import { AiOutlineArrowLeft, AiOutlineArrowRight } from "react-icons/ai";
import WeatherCard from "./WeatherCard.component";

interface Props {
  items: Weather[];
  cityName?: string;
}

type Direction = 1 | -1;

const DEFAULT_BUTTON_PROPS: ButtonProps = {
  className: "shrink-0",
  variant: "text",
  icon: true,
};

const WeatherList = ({ items, cityName }: Props) => {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [direction, setDirection] = useState<Direction>(1);

  const selectedItem = items[selectedIndex];

  const setSlide = (newDirection: 1 | -1) => {
    const nextIndex = wrap(0, items.length - 1, selectedIndex + newDirection);
    setSelectedIndex(nextIndex);
    setDirection(newDirection);
  };

  return (
    <NotFoundContainer message="لطفا نام شهر را جستجو کنید" itemCount={items.length}>
      {cityName && (
        <span className="text-xs">
          نتایح جستجو برای <strong className="text-base text-indigo-500">{cityName}</strong>
        </span>
      )}

      <div className="relative flex items-center justify-center gap-4">
        <BaseButton onClick={() => setSlide(1)} {...DEFAULT_BUTTON_PROPS}>
          <AiOutlineArrowRight />
        </BaseButton>

        <AnimatePresence custom={direction} initial={false} mode="popLayout">
          <WeatherCard key={selectedItem?.time} {...selectedItem} />
        </AnimatePresence>

        <BaseButton onClick={() => setSlide(-1)} {...DEFAULT_BUTTON_PROPS}>
          <AiOutlineArrowLeft />
        </BaseButton>
      </div>
    </NotFoundContainer>
  );
};

export default WeatherList;
