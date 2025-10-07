import useLocation from "../stores/locationStore";
import { fetchWeatherData } from "../api/weather";
import { useQuery } from "@tanstack/react-query";
import CurrentWeather from "./CurrentWeather";
import DailyWeather from "./DailyWeather";
import HourlyForecast from "./HourlyForecast";
import useUnits from "../stores/unitsStore";
import useEmptyDataStore from "../stores/emptyData";
import LoadingSkeleton from "./LoadingSkeleton";
import Error from "./Error";
const WeatherGrid = () => {
  const { rainfall, windSpeed, temperature } = useUnits();
  const { latitude, longitude } = useLocation();
  const { emptyData } = useEmptyDataStore();
  const { isLoading, data, isError, refetch } = useQuery({
    queryKey: [
      "weather-data",
      latitude,
      longitude,
      windSpeed,
      temperature,
      rainfall,
    ],
    queryFn: () =>
      fetchWeatherData(latitude, longitude, windSpeed, temperature, rainfall),
    enabled: !!latitude && !!longitude,
  });

  const onRefetch = () => refetch();

  if (isError) return <Error refetch={onRefetch} />;

  if (emptyData) {
    return (
      <p className="text-center mt-12 font-semibold text-[28px]">
        No search result found!
      </p>
    );
  }

  if (isLoading) return <LoadingSkeleton />;

  return (
    <section>
      <div className="space-y-8 mt-8 lg:mt-12 mb-12 lg:grid lg:grid-cols-7 gap-10 lg:max-h-[693px] lg:gap-8">
        <div className="g col-span-5">
          <CurrentWeather current={data!.current} />
          <DailyWeather daily={data!.daily} />
        </div>
        <div className="col-span-2 h-full">
          <HourlyForecast hourly={data!.hourly} />
        </div>
      </div>
    </section>
  );
};

export default WeatherGrid;
