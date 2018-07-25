import React from 'react';
import { connect } from 'react-redux';
import { fetchWeatherByZip, fetchWeatherByCity, fetchWeatherByCurrentLocation, fetchIntlWeather } from '../actions';
import Adapter from '../Adapter';

class WeatherSearch extends React.Component {
  constructor() {
    super();

    this.state = {
      zipSearch: '',
      citySearch: '',
      intlSearch: ''
    }
  }

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    }, ()=>{console.log('in weatherSearch', this.state)})
  }

  render() {
    return (
      <div
        style={{
          padding: '20px'
        }}>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            this.props.fetchWeatherByZip(this.state.zipSearch)}}
        >
          <input
            type="text"
            placeholder="Search in the US by Zip Code"
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
            placeholder="Search in the US - Enter 'City, State'"
            value={this.state.citySearch}
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
            this.props.fetchIntlWeather(this.state.intlSearch)}}>
          <input
            type="text"
            name="intlSearch"
            placeholder="Search Internationally - Enter 'City, Country'"
            value={this.state.intlSearch}
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
            navigator.geolocation.getCurrentPosition((resp)=>this.props.fetchWeatherByCurrentLocation(resp))}}>
          <input
            type="submit"
            value="Search By Current Location"
          />
        </form>
      </div>
    )
  }
}

export default connect(null, { fetchWeatherByZip, fetchWeatherByCity, fetchWeatherByCurrentLocation, fetchIntlWeather })(WeatherSearch);
