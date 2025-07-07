import service from "@/services/Weather";

import { ActionBar, WeatherList } from "@/components/Weather";

const TEN_MINUTE = 10 * 60 * 1000;

const Root = () => {
  const [searchedValue, setSearchedValue] = useState("");
  const debouncedSearchedValue = useDebounce(searchedValue, 800);
  const {
    data: { weather, city },
    loading,
    reExecute,
  } = usePromise(service.getWeatherByCityName, {
    key: "WEATHER",
    defaultData: { weather: [] },
    ttl: TEN_MINUTE,
  });

  useEffect(() => {
    if (!debouncedSearchedValue) return;

    reExecute(debouncedSearchedValue);
  }, [debouncedSearchedValue]);

  return (
    <div className="flex h-screen w-screen items-center justify-center">
      <Card className="flex w-100 flex-col gap-8 px-6 py-8">
        <ActionBar searchedValue={searchedValue} onSearchedValueChange={setSearchedValue} />

        {loading ? (
          <LoadingMessage message="در حال گرفتن وضعیت آب و هوا" />
        ) : (
          <WeatherList cityName={city?.name} items={weather} />
        )}
      </Card>
    </div>
  );
};

export default Root;
