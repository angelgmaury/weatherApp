import WeatherInfo from "./components/WeatherInfo";
import Header from "./components/Header";
import { useAppStore } from "./store";
import WeatherHighlights from "./components/WeatherHighlights";

function App() {
  const { is404 } = useAppStore();

  return (
    <div className="mx-2 md:mx-6 lg:mx-8 transition-all">
      <Header />

      {!is404 && (
        <div className="flex items-center w-full justify-center h-[30rem] font-bold text-xl lg:text-4xl">
          Indicates A City
        </div>
      )}

      {is404 && (
        <main className="flex flex-col lg:grid gap-8 lg:gap-0 lg:grid-cols-3">
          <section className="flex items-center">
            <WeatherInfo />
          </section>

          <section className="col-span-2">
            <WeatherHighlights />
          </section>
        </main>
      )}
    </div>
  );
}

export default App;
