import React from 'react';
import { connect } from 'react-redux';

const CurrentWeather = ({ weatherCity, weatherTitle, weatherSummary, temperature }) => {
  console.log(`CurrentWeather rendered`, weatherCity, weatherTitle, weatherSummary, temperature)
  return (
    <div>
      <h1>Current Weather for {weatherCity}</h1>
      <h2>{weatherTitle}</h2>
      <p><em>{weatherSummary}</em></p>
      <h2>{temperature}˚F</h2>
    </div>
  )
}

function mapStateToProps(state) {
  return {
    weatherCity: state.weatherCity,
    weatherTitle: state.weatherTitle,
    weatherSummary: state.weatherSummary,
    temperature: state.temperature
  }
}

export default connect(mapStateToProps)(CurrentWeather);
