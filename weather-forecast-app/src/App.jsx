import React, { useEffect } from 'react';
import SearchBar from './components/SearchBar';
import WeatherCard from './components/WeatherCard';
import ForecastCard from './components/ForecastCard';
import LoadingSpinner from './components/LoadingSpinner';
import { useWeather } from './hooks/useWeather';
import './styles/App.css';

function App() {
  const { currentWeather, forecast, loading, error, fetchWeatherData } = useWeather();

  useEffect(() => {
    // Load default city on app start
    fetchWeatherData('London');
  }, [fetchWeatherData]);

  const handleSearch = (searchQuery) => {
    fetchWeatherData(searchQuery);
  };

  return (
    <div className="app">
      <div className="app-container">
        <header className="app-header">
          <h1 className="app-title">Weather Forecast</h1>
          <p className="app-subtitle">Get real-time weather updates for any city</p>
          <SearchBar onSearch={handleSearch} loading={loading} />
        </header>

        <main className="app-main">
          {error && (
            <div className="error-container">
              <div className="error-message">
                <span className="error-icon">⚠️</span>
                <p>{error}</p>
              </div>
            </div>
          )}

          {loading && <LoadingSpinner message="Fetching weather data..." />}

          {currentWeather && !loading && !error && (
            <>
              <WeatherCard weather={currentWeather} />
              
              {forecast.length > 0 && (
                <section className="forecast-section">
                  <h2 className="forecast-title">5-Day Forecast</h2>
                  <div className="forecast-grid">
                    {forecast.map((day, index) => (
                      <ForecastCard key={index} forecast={day} />
                    ))}
                  </div>
                </section>
              )}
            </>
          )}
        </main>

        <footer className="app-footer">
          <p>Powered by OpenWeatherMap API</p>
        </footer>
      </div>
    </div>
  );
}

export default App;
