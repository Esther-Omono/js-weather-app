import { getCurrentUnits } from "./dom.js";

const API_KEY = '751cf99b011729693acfd27fbd852c04';
const API_URL = 'https://api.openweathermap.org/data/2.5/weather';

export async function fetchWeather(location) {
  const units = getCurrentUnits();
  const url = `${API_URL}?q=${location}&appid=${API_KEY}&units=${units}`;
  const response = await fetch(url);
  if (!response.ok) {
    throw new Error('Weather data not found!');
  }
  return response.json();
}

export function processWeatherData(data) {
  return {
    city: data.name,
    description: data.weather[0].description,
    temperature: Math.round(data.main.temp),
    humidity: data.main.humidity,
  };
}
