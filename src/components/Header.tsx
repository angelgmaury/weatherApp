import WeatherForm from "./WeatherForm";
import { IconCloud } from "@tabler/icons-react";
function Header() {
  return (
    <header className="grid gap-2 grid-cols-2 lg:grid-cols-3 mt-12 mb-28 items-center">
      <div className="flex items-center">
        <IconCloud size={40} />
        <h1 className="font-bold text-xl lg:text-3xl">WeatherApp</h1>
      </div>
      <WeatherForm />
    </header>
  );
}

export default Header;
