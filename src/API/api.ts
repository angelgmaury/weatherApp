export const API_KEY = "e5947bda2f59282bcae57ed207b86ee4";

export async function getData(city: string) {
  const API_URL = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${API_KEY}`;

  const res = await fetch(API_URL);

  if (res.status === 404) {
    throw new Error("Ciudad no encontrada");
  }

  const data = await res.json();
  return data;
}
