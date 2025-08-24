import React from 'react';
import { formatDay, getWeatherIcon, capitalizeWords } from '../utils/helpers';
import '../styles/ForecastCard.css';

const ForecastCard = ({ forecast }) => {
  const {
    dt,
    main: { temp_max, temp_min, humidity },
    weather: [{ main, description, icon }],
    wind: { speed }
  } = forecast;

  return (
    <div className="forecast-card">
      <div className="forecast-date">
        {formatDay(dt)}
      </div>
      
      <div className="forecast-icon-container">
        <img 
          src={getWeatherIcon(icon)} 
          alt={description}
          className="forecast-icon"
        />
      </div>
      
      <div className="forecast-condition">
        <span className="condition-main">{main}</span>
        <span className="condition-desc">{capitalizeWords(description)}</span>
      </div>
      
      <div className="forecast-temps">
        <span className="temp-high">{Math.round(temp_max)}°</span>
        <span className="temp-low">{Math.round(temp_min)}°</span>
      </div>
      
      <div className="forecast-details">
        <div className="forecast-detail">
          <span className="detail-icon">💧</span>
          <span>{humidity}%</span>
        </div>
        <div className="forecast-detail">
          <span className="detail-icon">💨</span>
          <span>{speed} m/s</span>
        </div>
      </div>
    </div>
  );
};

export default ForecastCard;
