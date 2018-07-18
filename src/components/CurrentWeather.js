import React from 'react';

const CurrentWeather = ({ weatherCity, weatherTitle, weatherSummary, temperature }) => {
  return(
    <div>
    <h1>Current Weather for {weatherCity}</h1>
    <h2>{weatherTitle}</h2>
    <p><em>{weatherSummary}</em></p>
    <h2>{temperature}˚F</h2>
    </div>
  )
}

export default CurrentWeather;
