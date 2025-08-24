import React from 'react';
import { formatDate, formatTime, getWeatherIcon, getWindDirection, capitalizeWords } from '../utils/helpers';
import '../styles/WeatherCard.css';

const WeatherCard = ({ weather }) => {
  if (!weather) return null;

  const {
    name,
    sys: { country, sunrise, sunset },
    main: { temp, feels_like, humidity, pressure, temp_min, temp_max },
    weather: [{ main, description, icon }],
    wind: { speed, deg },
    visibility,
    dt
  } = weather;

  return (
    <div className="weather-card">
      <div className="weather-header">
        <div className="location-info">
          <h1 className="city-name">{name}, {country}</h1>
          <p className="date">{formatDate(dt)}</p>
        </div>
      </div>

      <div className="weather-main">
        <div className="temperature-section">
          <img 
            src={getWeatherIcon(icon)} 
            alt={description}
            className="weather-icon"
          />
          <div className="temperature-info">
            <span className="current-temp">{Math.round(temp)}°C</span>
            <p className="feels-like">Feels like {Math.round(feels_like)}°C</p>
            <p className="temp-range">
              H: {Math.round(temp_max)}° L: {Math.round(temp_min)}°
            </p>
          </div>
        </div>

        <div className="weather-description">
          <h2 className="condition">{main}</h2>
          <p className="description">{capitalizeWords(description)}</p>
        </div>
      </div>

      <div className="weather-details">
        <div className="details-grid">
          <div className="detail-card">
            <div className="detail-icon">💧</div>
            <div className="detail-content">
              <span className="detail-label">Humidity</span>
              <span className="detail-value">{humidity}%</span>
            </div>
          </div>

          <div className="detail-card">
            <div className="detail-icon">🌪️</div>
            <div className="detail-content">
              <span className="detail-label">Wind</span>
              <span className="detail-value">
                {speed} m/s {deg && getWindDirection(deg)}
              </span>
            </div>
          </div>

          <div className="detail-card">
            <div className="detail-icon">🔽</div>
            <div className="detail-content">
              <span className="detail-label">Pressure</span>
              <span className="detail-value">{pressure} hPa</span>
            </div>
          </div>

          <div className="detail-card">
            <div className="detail-icon">👁️</div>
            <div className="detail-content">
              <span className="detail-label">Visibility</span>
              <span className="detail-value">{(visibility / 1000).toFixed(1)} km</span>
            </div>
          </div>

          <div className="detail-card">
            <div className="detail-icon">🌅</div>
            <div className="detail-content">
              <span className="detail-label">Sunrise</span>
              <span className="detail-value">{formatTime(sunrise)}</span>
            </div>
          </div>

          <div className="detail-card">
            <div className="detail-icon">🌇</div>
            <div className="detail-content">
              <span className="detail-label">Sunset</span>
              <span className="detail-value">{formatTime(sunset)}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WeatherCard;
