import drizzle from "../../assets/images/icon-drizzle.webp";
import overcast from "../../assets/images/icon-overcast.webp";
import partlyCloudy from "../../assets/images/icon-partly-cloudy.webp";
import fog from "../../assets/images/icon-fog.webp";
import rain from "../../assets/images/icon-rain.webp";
import snow from "../../assets/images/icon-snow.webp";
import storm from "../../assets/images/icon-storm.webp";
import sunny from "../../assets/images/icon-sunny.webp";

const weatherIcons: Record<number, string> = {
  0: sunny,
  2: partlyCloudy,
  3: overcast,
  45: fog,
  48: fog,
  51: drizzle,
  53: drizzle,
  55: drizzle,
  61: rain,
  63: rain,
  65: rain,
  71: snow,
  73: snow,
  75: snow,
  80: storm,
  81: storm,
  82: storm,
  1: sunny,
};

export default weatherIcons;
