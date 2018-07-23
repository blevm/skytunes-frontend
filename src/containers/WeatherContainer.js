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
    return(
      <React.Fragment>
        <div>YEAH WE LOGGED IN OMG</div>
        <WeatherSearch/>
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

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(WeatherContainer));
