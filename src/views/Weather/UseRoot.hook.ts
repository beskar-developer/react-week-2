import service from "@/services/Weather";

const TEN_MINUTE = 10 * 60 * 1000;

const useRoot = () => {
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

  return { searchedValue, setSearchedValue, city, weather, loading };
};

export default useRoot;
