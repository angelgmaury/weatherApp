import {
  IconWind,
  IconTemperatureMinus,
  IconTemperaturePlus,
  IconTemperatureCelsius,
  IconRipple,
  IconEye,
  IconDroplet,
  IconTemperature,
} from "@tabler/icons-react";
import { useAppStore } from "../store";

function WeatherHighlights() {
  const { weatherData } = useAppStore();
  const temperaturaMinRedondeada = weatherData?.main.temp_min
    ? Math.round(weatherData.main.temp_min)
    : undefined;
  const temperaturaMaxRedondeada = weatherData?.main.temp_max
    ? Math.round(weatherData.main.temp_max)
    : undefined;
  const feelsLikeRedondeada = weatherData?.main.feels_like
    ? Math.round(weatherData.main.feels_like)
    : undefined;

  return (
    <div className="rounded-xl p-8 bg-[#262627]">
      <p className="font-semibold text-base md:text-lg">Today Highlights</p>

      <div className="grid grid-cols-1 lg:grid-cols-2 lg:grid-rows-2 gap-8">
        <div className="bg-[#212122] mt-4 pt-4 px-6 rounded-xl">
          <p className=" text-gray-400 mb-4 text-sm">Temperature Min & Max</p>

          <div className="grid grid-cols-2 items-center gap-6 mt-8 mb-6">
            <span className="flex gap-4 items-center">
              <IconTemperatureMinus size={45} />

              <p className="text-xl md:text-4xl flex">
                {temperaturaMinRedondeada} <IconTemperatureCelsius />
              </p>
            </span>
            <span className="flex gap-4 items-center justify-end">
              <IconTemperaturePlus size={45} />

              <p className="text-xl md:text-4xl flex">
                {temperaturaMaxRedondeada} <IconTemperatureCelsius />
              </p>
            </span>
          </div>
        </div>

        <div className="bg-[#212122] mt-4 pt-4 px-6 rounded-xl">
          <p className=" text-gray-400 mb-4 text-sm">Air Speed</p>

          <div className="flex items-center gap-6 justify-between mt-8 mb-6">
            <IconWind size={45} />

            <p className="text-xl md:text-4xl">{weatherData?.wind.speed}</p>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="bg-[#212122] mt-4 pt-4 px-6 rounded-xl">
            <p className=" text-gray-400 mb-4 text-sm">Pressure</p>

            <div className="flex items-center justify-between gap-6 mt-8 mb-6">
              <IconRipple size={45} />

              <p className="text-xl md:text-xl">{weatherData?.main.pressure}</p>
            </div>
          </div>

          <div className="bg-[#212122] mt-4 pt-4 px-6 rounded-xl">
            <p className=" text-gray-400 mb-4 text-sm">Visibility</p>

            <div className="flex items-center gap-6 justify-between mt-8 mb-6">
              <IconEye size={45} />

              <p className="text-xl md:text-xl">
                {weatherData?.visibility
                  ? (weatherData.visibility / 1000).toFixed(0)
                  : ""}

                <span className="text-sm">km</span>
              </p>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="bg-[#212122] mt-4 pt-4 px-6 rounded-xl">
            <p className=" text-gray-400 mb-4 text-sm">Humidity</p>

            <div className="flex items-center gap-6 justify-between mt-8 mb-6">
              <IconDroplet size={45} />

              <p className="text-xl md:text-xl">
                {weatherData?.main.humidity}
                <span className="text-sm">%</span>
              </p>
            </div>
          </div>

          <div className="bg-[#212122] mt-4 pt-4 px-6 rounded-xl">
            <p className=" text-gray-400 mb-4 text-sm">Feels Like</p>

            <div className="flex items-center gap-6 justify-between mt-8 mb-6">
              <IconTemperature size={45} />

              <p className="text-xl md:text-xl flex">
                {feelsLikeRedondeada} <IconTemperatureCelsius />
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default WeatherHighlights;
