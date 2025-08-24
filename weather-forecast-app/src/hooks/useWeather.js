import { useState, useCallback } from 'react';
import { getCurrentWeather, getForecastWeather } from '../services/weatherAPI';

export const useWeather = () => {
  const [currentWeather, setCurrentWeather] = useState(null);
  const [forecast, setForecast] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const fetchWeatherData = useCallback(async (city) => {
    setLoading(true);
    setError('');
    
    try {
      const [currentData, forecastData] = await Promise.all([
        getCurrentWeather(city),
        getForecastWeather(city)
      ]);
      
      setCurrentWeather(currentData);
      
      // Process forecast data to get daily forecasts
      const dailyForecasts = processForecastData(forecastData.list);
      setForecast(dailyForecasts);
      
    } catch (err) {
      setError(err.message);
      setCurrentWeather(null);
      setForecast([]);
    } finally {
      setLoading(false);
    }
  }, []);

  const processForecastData = (forecastList) => {
    // Group forecasts by date and get one per day
    const dailyData = {};
    
    forecastList.forEach(item => {
      const date = new Date(item.dt * 1000).toDateString();
      if (!dailyData[date]) {
        dailyData[date] = item;
      }
    });
    
    return Object.values(dailyData).slice(1, 6); // Next 5 days
  };

  return {
    currentWeather,
    forecast,
    loading,
    error,
    fetchWeatherData
  };
};
