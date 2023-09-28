import { useAppStore } from "../store";
import { useState, useEffect } from "react";
import {
  IconSun,
  IconCloudRain,
  IconCloudSnow,
  IconCloud,
  IconHaze,
  IconMapPin,
  IconTemperatureCelsius,
} from "@tabler/icons-react";
import { ApiInterface } from "../types/data-api";

function WeatherInfo() {
  const { weatherData } = useAppStore();
  const [IconComponent, setIconComponent] = useState<React.ElementType | null>(
    null
  );

  useEffect(() => {
    if (weatherData) {
      const { weather } = weatherData as ApiInterface;
      const nubes = weather[0].main.toLowerCase();
      console.log(nubes);
      switch (nubes) {
        case "clear":
          setIconComponent(IconSun);
          break;
        case "rain":
          setIconComponent(IconCloudRain);
          break;
        case "snow":
          setIconComponent(IconCloudSnow);
          break;
        case "clouds":
          setIconComponent(IconCloud);
          break;
        case "mist":
          setIconComponent(IconHaze);
          break;
        default:
          setIconComponent(null);
          break;
      }
    }
  }, [weatherData]);

  if (!weatherData) {
    return <div>Indicates A City</div>;
  }

  const { name, main, weather } = weatherData as ApiInterface;
  const nubes = weather[0].main.toLowerCase();

  const temperaturaRedondeada = Math.round(main.temp);

  return (
    <div className="bg-[#262627] rounded-xl p-8 flex flex-col gap-4 w-full  md:h-[280px] lg:w-3/4">
      <p className="font-semibold text-lg lg:text-xl">Now</p>
      <span className="flex justify-between">
        <p className="flex text-6xl">
          {temperaturaRedondeada}
          <IconTemperatureCelsius size={50} />
        </p>
        {IconComponent && <IconComponent size={60} />}
      </span>
      <p className="font-semibold">{weather[0].description}</p>
      <hr className="border-[#323232] border-2" />
      <span className="flex gap-1">
        <IconMapPin />
        <p>
          {name}, {weatherData.sys.country}
        </p>
      </span>
      {!IconComponent && <p>Icono no encontrado para: {nubes}</p>}
    </div>
  );
}

export default WeatherInfo;
