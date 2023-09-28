import create from "zustand";
import { ApiInterface } from "../types/data-api";

interface AppState {
  city: string;
  is404: boolean;
  weatherData: ApiInterface | null;
  setWeatherData: (data: ApiInterface) => void;
  getDataOfCity: (city: string) => void;
  setIs404: (is404: boolean) => void;
}

export const useAppStore = create<AppState>((set) => ({
  weatherData: null,
  is404: false,
  city: "Japan",

  getDataOfCity: (city) => {
    set(() => ({
      city: city,
    }));
  },

  setWeatherData: (data) => {
    set(() => ({
      weatherData: data,
    }));
  },

  setIs404: (is404) => {
    set(() => ({
      is404: is404,
    }));
  },
}));
