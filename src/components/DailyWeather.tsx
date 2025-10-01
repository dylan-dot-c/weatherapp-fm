import weatherIcons from "../utils/weatherIcons";
export type DailyWeather = {
  time: Date[];
  weather_code: Float32Array | null;
  temperature_2m_max: Float32Array | null;
  temperature_2m_min: Float32Array | null;
};

type Props = {
  daily: DailyWeather;
};

type TransformedDay = {
  time: Date;
  code: number | null;
  temp_max: number | null;
  temp_min: number | null;
};

const transformData = (data: DailyWeather): TransformedDay[] => {
  const transformedData: TransformedDay[] = [];

  for (let i = 0; i < 7; i++) {
    transformedData.push({
      time: data.time[i],
      code: data.weather_code?.[i] ?? null,
      temp_max: data.temperature_2m_max?.[i] ?? null,
      temp_min: data.temperature_2m_min?.[i] ?? null,
    });
  }

  console.log(transformedData);
  return transformedData;
};

const DailyWeather = ({ daily }: Props) => {
  const realData = transformData(daily);
  return (
    <article className="mt-8">
      <h3 className="text-[20px] text-neutral-0 font-semibold">
        Daily forecast
      </h3>

      <div className="grid grid-cols-3 gap-4 mt-4">
        {realData.map((item) => {
          return (
            <div className="text-center rounded-xl border-neutral-600 bg-neutral-800 border py-4 px-[10px]  flex flex-col gap-2">
              <p>{item.time.toDateString().slice(0, 3)}</p>
              <div className="flex justify-center">
                <img
                  src={item.code ? weatherIcons[item.code] : weatherIcons[1]}
                  alt=""
                  width={60}
                />
              </div>
              <div className="flex justify-between">
                <p>{item.temp_max?.toFixed(0)}°</p>
                <p>{item.temp_min?.toFixed(0)}°</p>
              </div>
            </div>
          );
        })}
      </div>
    </article>
  );
};

export default DailyWeather;
