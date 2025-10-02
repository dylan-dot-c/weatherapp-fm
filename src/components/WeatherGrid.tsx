import useLocation from "../stores/locationStore";
import { fetchWeatherData } from "../api/weather";
import { useQuery } from "@tanstack/react-query";
import CurrentWeather from "./CurrentWeather";
import DailyWeather from "./DailyWeather";
import HourlyForecast from "./HourlyForecast";
import useUnits from "../stores/unitsStore";
const WeatherGrid = () => {
  const { rainfall, windSpeed, temperature } = useUnits();
  const { latitude, longitude } = useLocation();
  const { isLoading, error, data } = useQuery({
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
  console.log(data, isLoading, error);

  if (isLoading) return <p>LOADING</p>;

  if (error) return <h2>Error</h2>;

  return (
    <section>
      <CurrentWeather current={data!.current} />
      <DailyWeather daily={data!.daily} />
      <HourlyForecast hourly={data!.hourly} />

      {}
    </section>
  );
};

export default WeatherGrid;
