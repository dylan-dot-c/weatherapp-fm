import useLocation from "../stores/locationStore";
import { fetchWeatherData } from "../api/weather";
import { useQuery } from "@tanstack/react-query";
import Weather from "./Weather";

const WeatherGrid = () => {
  const { latitude, longitude } = useLocation();
  const { isLoading, error, data } = useQuery({
    queryKey: ["weather-data", latitude, longitude],
    queryFn: () => fetchWeatherData(latitude, longitude),
    enabled: !!latitude && !!longitude,
  });
  console.log(data, isLoading, error);

  if (isLoading) return <p>LOADING</p>;

  if (error) return <h2>Error</h2>;

  return (
    <section>
      <Weather current={data!.current} />

      {}
    </section>
  );
};

export default WeatherGrid;
