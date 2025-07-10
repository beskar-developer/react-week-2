import { usePresenceData } from "motion/react";

const useWeatherCard = () => {
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

  return { animationConfig };
};

export default useWeatherCard;
