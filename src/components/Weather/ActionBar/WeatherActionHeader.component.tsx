import { AiFillCloud } from "react-icons/ai";

const WeatherActionHeader = () => {
  return (
    <h1 className="mb-4 flex items-center justify-center gap-2 text-xl font-extrabold">
      <AiFillCloud className="size-8 text-indigo-300 dark:text-indigo-200" />

      <span>هواشناسی</span>
    </h1>
  );
};

export default WeatherActionHeader;
