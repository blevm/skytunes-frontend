import React from 'react';
import { connect } from 'react-redux';

const CurrentWeather = ({ weatherCity, weatherTitle, weatherSummary, temperature }) => {
  return (
    <div style={{marginTop: '20px'}}>
      <h1 style={{color: 'white', fontFamily: 'Nunito, sans-serif'}}>Current Weather for {weatherCity}</h1>
      <div
        style={{border: '2px solid white', borderRadius: '50px', width: '30%', marginLeft: 'auto', marginRight: 'auto', padding: '30px 10px'}}
      >
      {weatherTitle ? <h2 style={{fontFamily: 'Nunito, sans-serif'}}>{weatherTitle}</h2> : null}
      {weatherSummary ? <p style={{fontFamily: 'Nunito, sans-serif'}}><em>{weatherSummary}</em></p> : null}
      {temperature ? <h2 style={{fontFamily: 'Nunito, sans-serif'}}>{temperature}˚F</h2> : null}
      </div>
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
