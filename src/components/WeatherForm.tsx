import React, { useEffect, useCallback } from "react";
import { getData } from "../API/api";
import { useAppStore } from "../store";

import { IconSearch } from "@tabler/icons-react";

function WeatherForm() {
  const { setWeatherData, getDataOfCity, city, setIs404 } = useAppStore();

  const fetchDataFromApi = useCallback(
    async (city: string) => {
      try {
        const data = await getData(city);
        setWeatherData(data);

        setIs404(data.cod === 200);
      } catch (error) {
        console.error("Error al obtener datos de la API:", error);
        setIs404(false);
      }
    },
    [setWeatherData, setIs404]
  );
  useEffect(() => {
    fetchDataFromApi(city);
  }, [city, setWeatherData, fetchDataFromApi]);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const inputCity = (e.currentTarget.elements[0] as HTMLInputElement).value;
    getDataOfCity(inputCity);
    fetchDataFromApi(inputCity);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="relative">
        <input
          type="text"
          name="city"
          id="city"
          autoComplete="off"
          className="px-5 pr-12 lg:px-10 py-2 rounded-3xl w-[100%] outline-none bg-[#262627] focus:bg-transparent border border-transparent focus:border focus:border-white"
          placeholder="Search City..."
        />
        <button
          className="absolute inset-y-0 right-5 lg:right-10 flex items-center cursor-pointer"
          type="submit"
        >
          <IconSearch size={20} color="#fff" />
        </button>
      </div>
    </form>
  );
}

export default WeatherForm;
