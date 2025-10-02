// import bg from "../../assets/images/bg-today-small.svg";
import useLocation from "../stores/locationStore";
import useUnits from "../stores/unitsStore";
import { formatDateString } from "../utils/formatDateString";
import weatherIcons from "../utils/weatherIcons";

export type CurrentWeather = {
  time: Date;
  temperature_2m: number;
  precipitation: number;
  relative_humidity_2m: number;
  rain: number;
  apparent_temperature: number;
  weather_code: number;
  wind_speed_10m: number;
};

type Props = {
  current: CurrentWeather;
};
const CurrentWeather = ({ current }: Props) => {
  const { windSpeed, rainfall } = useUnits();
  const { location } = useLocation();

  return (
    <section className="space-y-4">
      <div
        className={`bg-[url('../bg-today-small.svg')] md:bg-[url('../bg-today-small.svg')] bg-fit h-[286px] bg-center bg-no-repeat mt-6 p-4 font-family-dm-sans flex flex-col justify-center gap-8`}
      >
        <div className="text-center">
          <h2 className="text-3xl font-semibold mb-2">{location}</h2>
          <h3 className="font-light text-neutral-0">
            {formatDateString(current.time)}
          </h3>
        </div>
        <div className="flex justify-center items-center">
          <img
            src={weatherIcons[current.weather_code]}
            alt="Sunny"
            width={120}
          />
          <p className="text-8xl text-right italic">
            {current.temperature_2m.toFixed(0)}°
          </p>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-4">
        <div className="weather--stats">
          <p>Feels Like</p>
          <span>{current.apparent_temperature.toFixed()}°</span>
        </div>
        <div className="weather--stats">
          <p>Humidity</p>
          <span>{current.relative_humidity_2m}%</span>
        </div>
        <div className="weather--stats">
          <p>Wind</p>
          <span>
            {" "}
            {current.wind_speed_10m.toFixed(0)}{" "}
            {windSpeed == "kmh" ? "km/h" : windSpeed}
          </span>
        </div>
        <div className="weather--stats">
          <p>Precipitation</p>
          <span>
            {" "}
            {current.precipitation.toFixed(1)}{" "}
            {rainfall == "inch" ? "in" : "mm"}
          </span>
        </div>
      </div>
    </section>
  );
};

export default CurrentWeather;
