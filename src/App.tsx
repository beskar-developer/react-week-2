import WeatherRoot from "@/views/Weather/Root.view";

const App = () => {
  return (
    <div className={twMerge("app-container dark:text-white", "p-0")}>
      <WeatherRoot />
    </div>
  );
};

export default App;
