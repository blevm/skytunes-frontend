import React from 'react';

const CurrentWeather = ({ weatherTitle, weatherSummary, temperature }) => {
  return(
    <div>
    <h1>HERE IS YOUR WEATHER WOW OMG</h1>
    <h2>{weatherTitle}</h2>
    <p><em>{weatherSummary}</em></p>
    <h2>{temperature}˚F</h2>
    </div>
  )
}

export default CurrentWeather;
