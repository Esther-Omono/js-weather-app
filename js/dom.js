const loadingDiv = document.getElementById('loading');
const weatherInfoDiv = document.getElementById('weather-info');
const cityElement = document.getElementById('city');
const descriptionElement = document.getElementById('description');
const temperatureElement = document.getElementById('temperature');
const humidityElement = document.getElementById('humidity');

let currentUnits = 'metric';

export function showLoading() {
  loadingDiv.classList.add('active');
  weatherInfoDiv.classList.remove('active');
}

export function hideLoading() {
  loadingDiv.classList.remove('active');
}

export function toggleUnits() {
  currentUnits = currentUnits === 'metric' ? 'imperial' : 'metric';
}

export function getCurrentUnits() {
    return currentUnits;
}

export function displayWeatherInfo(weather) {
  cityElement.textContent = weather.city;
  descriptionElement.textContent = `Description: ${weather.description}`;
  temperatureElement.textContent = `Temperature: ${weather.temperature}°${currentUnits === 'metric' ? 'C' : 'F'}`;
  humidityElement.textContent = `Humidity: ${weather.humidity}%`;
  weatherInfoDiv.classList.add('active');
}

