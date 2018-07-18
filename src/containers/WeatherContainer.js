import React from 'react';
import WeatherSearch from '../components/WeatherSearch';
import CurrentWeather from '../components/CurrentWeather';
import { withRouter } from 'react-router-dom';
import qs from "query-string";

class WeatherContainer extends React.Component {
  constructor() {
    super()

    this.state = {
      zipSearch: '',
      citySearch: '',
      weatherCity: '',
      weatherTitle: '',
      weatherSummary: '',
      temperature: ''
    }
  }

  handleChange = (e, name) => {
    this.setState({
      [name]: e.target.value
    }, ()=>{console.log(this.state)})
  }

  handleSubmit = (e, type) => {
    e.preventDefault()
    if (type === 'zip') {
      fetch(`http://localhost:4000/api/v1/search-zip/${this.state.zipSearch}`)
      .then(resp =>  resp.json())
      .then(data => this.setState({
        weatherCity: (data.city) ? data.city : '',
        weatherTitle: (data.currently) ? data.currently.summary : '',
        weatherSummary: (data.minutely) ? data.minutely.summary : '',
        temperature: (data.currently) ? data.currently.temperature : ''
      }))
    } else if (type === 'city') {
      fetch(`http://localhost:4000/api/v1/search-city/${this.state.citySearch}`)
      .then(resp =>  resp.json())
      .then(data => this.setState({
        weatherCity: (data.city) ? data.city : '',
        weatherTitle: (data.currently) ? data.currently.summary : '',
        weatherSummary: (data.minutely) ? data.minutely.summary : '',
        temperature: (data.currently) ? data.currently.temperature : ''
      }))
    }
  }

  componentDidMount() {
    if (this.props.currentUser !== qs.parse(this.props.location.search).username) {
      this.props.setUser(qs.parse(this.props.location.search))
    }
  }

  render() {

    return(
      <React.Fragment>
        <div>YEAH WE LOGGED IN OMG</div>
          <audio src="" controls="play">
          Your browser does not support the audio element.
          </audio>
        <WeatherSearch
          zipSearch={this.state.zipSearch}
          citySearch={this.state.citySearch}
          handleChange={this.handleChange}
          handleSubmit={this.handleSubmit}
        />
      {(this.state.weatherSummary !== '' || this.state.temperature !== '') ?
      <CurrentWeather {...this.state} /> : null}
      </React.Fragment>
    )
  }
}

export default withRouter(WeatherContainer);
