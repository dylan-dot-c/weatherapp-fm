import { useState } from "react";
import weatherIcons from "../utils/weatherIcons";

export type HourlyWeather = {
  time: Date[];
  temperature_2m: Float32Array | null;
  weather_code: Float32Array | null;
};

type Props = {
  hourly: HourlyWeather;
};

const transformHourlyData = (data: HourlyWeather) => {
  const res = [];

  for (let i = 0; i < 168; i++) {
    const item = {
      time: data.time ? data.time[i] : new Date(),
      temperature: data.temperature_2m ? data.temperature_2m[i] : 0,
      code: data.weather_code ? data.weather_code[i] : 0,
    };

    res.push(item);
  }

  const groupedData = Object.groupBy(res, (item) => {
    return item.time.getDay();
  });

  console.log(JSON.stringify(groupedData));

  return groupedData;
};

const formatTime = (date: Date) => {
  let res = "";
  const time = date.getHours();
  if (time == 0) {
    res = `12 AM`;
  } else if (time < 12) {
    res = `${time} AM`;
  } else {
    if (time == 12) {
      res = `12 PM`;
    } else {
      res = `${time - 12} PM`;
    }
  }

  return res;
};
const HourlyForecast = ({ hourly }: Props) => {
  const hourlyData = transformHourlyData(hourly);
  const [today, setToday] = useState(new Date().getDay());
  return (
    <aside className="mt-4 lg:py-0 lg:mt-0 bg-neutral-800 rounded-2xl max-h-[620px] lg:min-h-[673px] relative py-2">
      <div className="flex justify-between items-center lg:px-6 lg:py-4 p-4">
        <h3 className="text-[20px] font-semibold text-neutral-0">
          Hourly forecast
        </h3>
        <select
          className="p-2 rounded-md bg-neutral-600"
          name="days"
          id="days-dropdown"
          value={today}
          onChange={(e) => setToday(parseInt(e.target.value))}
        >
          <option value="0">Sunday</option>
          <option value="1">Monday</option>
          <option value="2">Tuesday</option>
          <option value="3">Wednesday</option>
          <option value="4">Thursday</option>
          <option value="5">Friday</option>
          <option value="6">Saturday</option>
        </select>
      </div>

      <ul className=" daily--weather space-y-4 max-h-[500px] lg:max-h-[570px] overflow-auto lg:px-6 px-4">
        {hourlyData[today]?.map((item) => {
          return (
            <li className="flex justify-between bg-neutral-700 border border-neutral-600 p-1 px-3 rounded-xl items-center">
              <div className="flex gap-4 items-center">
                <div>
                  <img
                    src={weatherIcons[item.code].icon}
                    alt={weatherIcons[item.code].label}
                    width={40}
                  />
                </div>
                {formatTime(item.time)}
              </div>
              {item.temperature.toFixed(0)}°
            </li>
          );
        })}
      </ul>
    </aside>
  );
};

export default HourlyForecast;
