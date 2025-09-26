import { create } from "zustand";

type State = {
  unitSystem: "imperial" | "metric";
  temperature: "celsius" | "fahrenheit";
  windSpeed: "km/h" | "mph";
  rainfall: "mm" | "inches";
};

type Action = {
  toggleSystem: () => void;
  changeTempUnit: (unit: State["temperature"]) => void;
  changespeedUnit: (unit: State["windSpeed"]) => void;
  changeRainUnit: (unit: State["rainfall"]) => void;
};

const useUnits = create<State & Action>((set) => ({
  unitSystem: "metric",
  temperature: "celsius",
  windSpeed: "km/h",
  rainfall: "mm",

  toggleSystem: () =>
    set((state) => {
      if (state.unitSystem == "imperial") {
        return {
          unitSystem: "metric",
          temperature: "celsius",
          windSpeed: "km/h",
          rainfall: "mm",
        };
      } else {
        return {
          unitSystem: "imperial",
          temperature: "fahrenheit",
          windSpeed: "mph",
          rainfall: "inches",
        };
      }
    }),
  changeRainUnit: (unit) => set(() => ({ rainfall: unit })),
  changespeedUnit: (unit) => set(() => ({ windSpeed: unit })),
  changeTempUnit: (unit) => set(() => ({ temperature: unit })),
}));

export default useUnits;
