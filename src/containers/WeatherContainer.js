import React from 'react';
import WeatherSearch from '../components/WeatherSearch';
import CurrentWeather from '../components/CurrentWeather';

class WeatherContainer extends React.Component {
  constructor() {
    super()

    this.state = {
      searchTerm: '',
      weatherTitle: '',
      weatherSummary: '',
      temperature: ''
    }
  }

  handleChange = (e) => {
    this.setState({
      searchTerm: e.target.value
    }, ()=>{console.log(this.state.searchTerm)})
  }

  handleSubmit = (e) => {
    e.preventDefault()
    fetch(`http://localhost:4000/api/v1/search-zip/${this.state.searchTerm}`)
    .then(resp =>  resp.json())
    .then(data => this.setState({
      weatherTitle: data.currently.summary,
      weatherSummary: data.minutely.summary,
      temperature: data.currently.temperature
    }))
  }

  render() {
    return(
      <React.Fragment>
        <div>YEAH WE LOGGED IN OMG</div>
        <WeatherSearch
          searchTerm={this.state.searchTerm}
          handleChange={this.handleChange}
          handleSubmit={this.handleSubmit}
        />
      {(this.state.weatherSummary !== '' || this.state.temperature !== '') ?
      <CurrentWeather {...this.state} /> : null}
      </React.Fragment>
    )
  }
}

export default WeatherContainer
