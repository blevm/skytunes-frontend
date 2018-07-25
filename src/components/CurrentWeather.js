import React from 'react';
import { connect } from 'react-redux';

const CurrentWeather = ({ weatherCity, weatherTitle, weatherSummary, temperature }) => {
  return (
    <div>
      <h1>Current Weather for {weatherCity}</h1>
      {weatherTitle ? <h2>{weatherTitle}</h2> : null}
      {weatherSummary ? <p><em>{weatherSummary}</em></p> : null}
      {temperature ? <h2>{temperature}˚F</h2> : null}
    </div>
  )
}

function mapStateToProps(state) {
  return {
    weatherCity: state.weather.weatherCity,
    weatherTitle: state.weather.weatherTitle,
    weatherSummary: state.weather.weatherSummary,
    temperature: state.weather.temperature
  }
}

export default connect(mapStateToProps)(CurrentWeather);
