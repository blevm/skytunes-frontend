import React from 'react';
import WeatherSearch from '../components/WeatherSearch';
import CurrentWeather from '../components/CurrentWeather';
import { withRouter } from 'react-router-dom';
import qs from "query-string";
import { connect } from 'react-redux';
import { setUser } from '../actions';

class WeatherContainer extends React.Component {

  componentDidMount() {
    this.props.setUser(qs.parse(this.props.location.search))
  }

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
    currentUser: state.user.currentUser,
    weatherSummary: state.weather.weatherSummary,
    temperature: state.weather.temperature
  }
}

function mapDispatchToProps(dispatch) {
  return {
    setUser: data => dispatch(setUser(data))
  }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(WeatherContainer));
