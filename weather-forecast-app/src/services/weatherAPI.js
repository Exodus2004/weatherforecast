import axios from 'axios';

const API_KEY = import.meta.env.VITE_WEATHER_API_KEY;
const BASE_URL = import.meta.env.VITE_WEATHER_BASE_URL;

const weatherAPI = axios.create({
  baseURL: BASE_URL,
  timeout: 10000,
});

export const getCurrentWeather = async (city) => {
  try {
    const response = await weatherAPI.get('/weather', {
      params: {
        q: city,
        appid: API_KEY,
        units: 'metric'
      }
    });
    return response.data;
  } catch (error) {
    if (error.response?.status === 404) {
      throw new Error('City not found. Please check the spelling and try again.');
    }
    throw new Error('Failed to fetch weather data. Please try again later.');
  }
};

export const getForecastWeather = async (city) => {
  try {
    const response = await weatherAPI.get('/forecast', {
      params: {
        q: city,
        appid: API_KEY,
        units: 'metric'
      }
    });
    return response.data;
  } catch (error) {
    if (error.response?.status === 404) {
      throw new Error('City not found. Please check the spelling and try again.');
    }
    throw new Error('Failed to fetch forecast data. Please try again later.');
  }
};

export const getWeatherByCoords = async (lat, lon) => {
  try {
    const response = await weatherAPI.get('/weather', {
      params: {
        lat,
        lon,
        appid: API_KEY,
        units: 'metric'
      }
    });
    return response.data;
  } catch (error) {
    throw new Error('Failed to fetch weather data for your location.');
  }
};
