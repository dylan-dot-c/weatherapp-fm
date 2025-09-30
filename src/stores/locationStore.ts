import { create } from "zustand";

type State = {
  latitude: number;
  longitude: number;
  location: string;
};

type Actions = {
  setInfo: (lat: number, long: number, name: string) => void;
};

const useLocation = create<State & Actions>((set) => ({
  latitude: 52.52437,
  longitude: 13.41053,
  location: "Berlin, Germany",

  setInfo: (lat, long, name) =>
    set(() => {
      return {
        latitude: lat,
        longitude: long,
        location: name,
      };
    }),
}));

export default useLocation;
