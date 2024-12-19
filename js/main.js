import { fetchWeather, processWeatherData } from './api.js';
import { showLoading, hideLoading, displayWeatherInfo, toggleUnits } from './dom.js';

const form = document.getElementById('weather-form');
const toggleButton = document.querySelector('.toggleBtn');

form.addEventListener('submit', async (event) => {
  event.preventDefault();
  const location = document.getElementById('location').value.trim();

  showLoading();

  try {
    const data = await fetchWeather(location);
    const weather = processWeatherData(data);
    displayWeatherInfo(weather);
  } catch (error) {
    alert(error.message);
  } finally {
    hideLoading();
  }
});

toggleButton.addEventListener('click', () => {
    toggleUnits();
    const location = document.getElementById('city').textContent;
    if (location) {
        form.dispatchEvent(new Event('submit'));
    }
})
