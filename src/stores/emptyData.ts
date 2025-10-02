import { create } from "zustand";

type State = {
  emptyData: boolean;
  setEmptyData: (value: boolean) => void;
};

const useEmptyDataStore = create<State>((set) => ({
  emptyData: false, // default value
  setEmptyData: (value) => set({ emptyData: value }),
}));

export default useEmptyDataStore;
