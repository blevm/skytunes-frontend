import React from 'react';
import WeatherSearch from '../components/WeatherSearch';
import CurrentWeather from '../components/CurrentWeather';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';

class WeatherContainer extends React.Component {

  render() {
    console.log('condition', (this.props.weatherSummary !== '' || this.props.temperature), this.props)
    return(
      <React.Fragment>
        {(this.props.weatherSummary !== '' || this.props.temperature)
          ? null
          : <WeatherSearch />
        }
        <div className="ui loader"></div>
        {(this.props.weatherSummary !== '' || this.props.temperature !== '')
          ? <CurrentWeather />
          : null
        }
      </React.Fragment>
    )
  }
}

function mapStateToProps(state) {
  return {
    weatherSummary: state.weather.weatherSummary,
    temperature: state.weather.temperature
  }
}

export default withRouter(connect(mapStateToProps)(WeatherContainer));
