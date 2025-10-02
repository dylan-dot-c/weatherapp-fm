import { fetchWeatherApi } from "openmeteo";
// import { useQuery } from "@tanstack/react-query";

export const fetchWeatherData = async (
  lat: number,
  long: number,
  windUnit: string,
  tempUnit: string,
  rainUnit: string
) => {
  const params = {
    latitude: lat,
    longitude: long,
    daily: ["weather_code", "temperature_2m_max", "temperature_2m_min"],
    hourly: ["temperature_2m", "weather_code"],
    current: [
      "temperature_2m",
      "precipitation",
      "relative_humidity_2m",
      "rain",
      "apparent_temperature",
      "weather_code",
      "wind_speed_10m",
    ],
    timezone: "America/New_York",
    wind_speed_unit: windUnit,
    temperature_unit: tempUnit,
    precipitation_unit: rainUnit,
  };
  const url = "https://api.open-meteo.com/v1/forecast";
  const responses = await fetchWeatherApi(url, params);

  // Process first location. Add a for-loop for multiple locations or weather models
  const response = responses[0];

  // Attributes for timezone and location
  const latitude = response.latitude();
  const longitude = response.longitude();
  const elevation = response.elevation();
  const timezone = response.timezone();
  const timezoneAbbreviation = response.timezoneAbbreviation();
  const utcOffsetSeconds = response.utcOffsetSeconds();

  console.log(
    `\nCoordinates: ${latitude}°N ${longitude}°E`,
    `\nElevation: ${elevation}m asl`,
    `\nTimezone: ${timezone} ${timezoneAbbreviation}`,
    `\nTimezone difference to GMT+0: ${utcOffsetSeconds}s`
  );

  const current = response.current()!;
  const hourly = response.hourly()!;
  const daily = response.daily()!;

  // Note: The order of weather variables in the URL query and the indices below need to match!
  const weatherData = {
    current: {
      time: new Date((Number(current.time()) + utcOffsetSeconds) * 1000),
      temperature_2m: current.variables(0)!.value(),
      precipitation: current.variables(1)!.value(),
      relative_humidity_2m: current.variables(2)!.value(),
      rain: current.variables(3)!.value(),
      apparent_temperature: current.variables(4)!.value(),
      weather_code: current.variables(5)!.value(),
      wind_speed_10m: current.variables(6)!.value(),
    },
    hourly: {
      time: [
        ...Array(
          (Number(hourly.timeEnd()) - Number(hourly.time())) / hourly.interval()
        ),
      ].map(
        (_, i) =>
          new Date(
            (Number(hourly.time()) + i * hourly.interval() + utcOffsetSeconds) *
              1000
          )
      ),
      temperature_2m: hourly.variables(0)!.valuesArray(),
      weather_code: hourly.variables(1)!.valuesArray(),
    },
    daily: {
      time: [
        ...Array(
          (Number(daily.timeEnd()) - Number(daily.time())) / daily.interval()
        ),
      ].map(
        (_, i) =>
          new Date(
            (Number(daily.time()) + i * daily.interval() + utcOffsetSeconds) *
              1000
          )
      ),
      weather_code: daily.variables(0)!.valuesArray(),
      temperature_2m_max: daily.variables(1)!.valuesArray(),
      temperature_2m_min: daily.variables(2)!.valuesArray(),
    },
  };

  // 'weatherData' now contains a simple structure with arrays with datetime and weather data
  console.log(
    `\nCurrent time: ${weatherData.current.time}`,
    `\nCurrent temperature_2m: ${weatherData.current.temperature_2m}`,
    `\nCurrent precipitation: ${weatherData.current.precipitation}`,
    `\nCurrent relative_humidity_2m: ${weatherData.current.relative_humidity_2m}`,
    `\nCurrent rain: ${weatherData.current.rain}`,
    `\nCurrent apparent_temperature: ${weatherData.current.apparent_temperature}`,
    `\nCurrent weather_code: ${weatherData.current.weather_code}`,
    `\nCurrent wind_speed_10m: ${weatherData.current.wind_speed_10m}`
  );
  console.log("\nHourly data", weatherData.hourly);
  console.log("\nDaily data", weatherData.daily);

  return weatherData;
};
