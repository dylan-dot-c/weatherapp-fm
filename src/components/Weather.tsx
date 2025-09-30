// import bg from "../../assets/images/bg-today-small.svg";
import sunny from "../../assets/images/icon-sunny.webp";
import useLocation from "../stores/locationStore";

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
const Weather = ({ current }: Props) => {
  const { location } = useLocation();
  return (
    <section>
      <div
        className={`bg-[url('bg-today-small.svg')] bg-fit h-[286px] bg-center bg-no-repeat mt-6 p-4 font-family-dm-sans flex flex-col justify-center gap-8`}
      >
        <div className="text-center">
          <h2 className="text-3xl font-semibold mb-2">{location}</h2>
          <h3 className="font-light text-neutral-0">
            {new Date().toDateString()}
          </h3>
        </div>
        <div className="flex justify-center">
          <img src={sunny} alt="Sunny" width={120} />
          <p className="text-8xl text-right italic">
            {current.temperature_2m.toFixed(0)}
          </p>
        </div>
      </div>
    </section>
  );
};

export default Weather;
