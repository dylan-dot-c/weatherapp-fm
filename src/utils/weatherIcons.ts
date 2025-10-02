import drizzle from "../../assets/images/icon-drizzle.webp";
import overcast from "../../assets/images/icon-overcast.webp";
import partlyCloudy from "../../assets/images/icon-partly-cloudy.webp";
import fog from "../../assets/images/icon-fog.webp";
import rain from "../../assets/images/icon-rain.webp";
import snow from "../../assets/images/icon-snow.webp";
import storm from "../../assets/images/icon-storm.webp";
import sunny from "../../assets/images/icon-sunny.webp";

type WeatherIcon = {
  icon: string;
  label: string;
};

const weatherIcons: Record<number, WeatherIcon> = {
  0: { icon: sunny, label: "Clear sky" },
  1: { icon: sunny, label: "Mainly clear" },
  2: { icon: partlyCloudy, label: "Partly cloudy" },
  3: { icon: overcast, label: "Overcast" },

  45: { icon: fog, label: "Fog" },
  48: { icon: fog, label: "Depositing rime fog" },

  51: { icon: drizzle, label: "Light drizzle" },
  53: { icon: drizzle, label: "Moderate drizzle" },
  55: { icon: drizzle, label: "Dense drizzle" },

  56: { icon: drizzle, label: "Light freezing drizzle" },
  57: { icon: drizzle, label: "Dense freezing drizzle" },

  61: { icon: rain, label: "Slight rain" },
  63: { icon: rain, label: "Moderate rain" },
  65: { icon: rain, label: "Heavy rain" },

  66: { icon: rain, label: "Light freezing rain" },
  67: { icon: rain, label: "Heavy freezing rain" },

  71: { icon: snow, label: "Slight snowfall" },
  73: { icon: snow, label: "Moderate snowfall" },
  75: { icon: snow, label: "Heavy snowfall" },

  77: { icon: snow, label: "Snow grains" },

  80: { icon: storm, label: "Slight rain showers" },
  81: { icon: storm, label: "Moderate rain showers" },
  82: { icon: storm, label: "Violent rain showers" },

  85: { icon: snow, label: "Slight snow showers" },
  86: { icon: snow, label: "Heavy snow showers" },

  95: { icon: storm, label: "Thunderstorm" },
  96: { icon: storm, label: "Thunderstorm with slight hail" },
  99: { icon: storm, label: "Thunderstorm with heavy hail" },
};

export default weatherIcons;
