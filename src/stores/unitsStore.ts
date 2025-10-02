import { create } from "zustand";

type State = {
  unitSystem: "imperial" | "metric";
  temperature: "celsius" | "fahrenheit";
  windSpeed: "kmh" | "mph";
  rainfall: "mm" | "inch";
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
  windSpeed: "kmh",
  rainfall: "mm",

  toggleSystem: () =>
    set((state) => {
      if (state.unitSystem == "imperial") {
        return {
          unitSystem: "metric",
          temperature: "celsius",
          windSpeed: "kmh",
          rainfall: "mm",
        };
      } else {
        return {
          unitSystem: "imperial",
          temperature: "fahrenheit",
          windSpeed: "mph",
          rainfall: "inch",
        };
      }
    }),
  changeRainUnit: (unit) => set(() => ({ rainfall: unit })),
  changespeedUnit: (unit) => set(() => ({ windSpeed: unit })),
  changeTempUnit: (unit) => set(() => ({ temperature: unit })),
}));

export default useUnits;
