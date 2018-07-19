import React from 'react';
import WeatherSearch from '../components/WeatherSearch';
import CurrentWeather from '../components/CurrentWeather';
import { withRouter } from 'react-router-dom';
import qs from "query-string";

class WeatherContainer extends React.Component {
  constructor() {
    super()

    // this.state = {
    //   zipSearch: '',
    //   citySearch: '',
    //   weatherCity: '',
    //   weatherTitle: '',
    //   weatherSummary: '',
    //   temperature: ''
    // }
  }

  // let { zipSearch, citySearch, weatherSummary, temperature } = this.props

  componentDidMount() {
    if (this.props.currentUser !== qs.parse(this.props.location.search).username) {
      this.props.setUser(qs.parse(this.props.location.search))
    }
  }

  render() {
    return(
      <React.Fragment>
        <div>YEAH WE LOGGED IN OMG</div>
        <WeatherSearch
          zipSearch={this.props.zipSearch}
          citySearch={this.props.citySearch}
          handleChange={this.props.handleChange}
          handleSubmit={this.props.handleSubmit}
        />
      {(this.props.weatherSummary !== '' || this.props.temperature !== '') ?
      <CurrentWeather {...this.props} /> : null}
      </React.Fragment>
    )
  }
}

export default withRouter(WeatherContainer);
