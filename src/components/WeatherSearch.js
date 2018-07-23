import React from 'react';
import { connect } from 'react-redux';
import { fetchWeatherByZip, fetchWeatherByCity } from '../actions';

class WeatherSearch extends React.Component {
  constructor() {
    super();

    this.state = {
      zipSearch: '',
      citySearch: ''
    }
  }

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    }, ()=>{console.log('in weatherSearch', this.state)})
  }

  render() {
    return (
      <React.Fragment>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            this.props.fetchWeatherByZip(this.state.zipSearch)}}
        >
          <input
            type="text"
            placeholder="Enter Zip Code"
            name="zipSearch"
            value={this.state.zipSearch}
            style={{width: '300px'}}
            onChange={(event) => this.handleChange(event)}
          />
          <input
            type="submit"
            value="Get the Weather"
          />
        </form>
        <form onSubmit={(e) => {
            e.preventDefault();
            this.props.fetchWeatherByCity(this.state.citySearch)}}>
          <input
            type="text"
            name="citySearch"
            placeholder="Enter City, State"
            value={this.state.citySearch}
            style={{width: '300px'}}
            onChange={(event) => this.handleChange(event)}
          />
          <input
            type="submit"
            value="Get the Weather"
          />
        </form>
      </React.Fragment>
    )
  }
}

export default connect(null, { fetchWeatherByZip, fetchWeatherByCity })(WeatherSearch);
