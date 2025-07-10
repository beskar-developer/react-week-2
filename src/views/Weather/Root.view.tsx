import useRoot from "./UseRoot.hook";

import { WeatherActionBar, WeatherList } from "@/components/Weather";

const Root = () => {
  const { searchedValue, setSearchedValue, city, weather, loading } = useRoot();

  return (
    <div className="flex h-screen w-screen items-center justify-center">
      <Card className="flex w-100 flex-col gap-8 px-6 py-8">
        <WeatherActionBar searchedValue={searchedValue} onSearchedValueChange={setSearchedValue} />

        <WeatherList cityName={city?.name} loading={loading} items={weather} />
      </Card>
    </div>
  );
};

export default Root;
