import React from 'react';
import { connect } from 'react-redux';
import { zipWeatherSearch, cityWeatherSearch } from '../actions';

class WeatherSearch extends React.Component {
  constructor() {
    super()

    this.state = {
      zipSearch: '',
      citySearch: ''
    }
  }

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    }, ()=>{console.log(this.state)})
  }

  render() {
    return (
      <React.Fragment>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            this.props.zipWeatherSearch(this.state.zipSearch)}}
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
            this.props.cityWeatherSearch(this.state.citySearch)}}>
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

function mapDispatchToProps(dispatch) {
  return {
    zipWeatherSearch: (search) => dispatch(zipWeatherSearch(search)),
    cityWeatherSearch: (search) => dispatch(cityWeatherSearch(search))
  }
}

export default connect(null, mapDispatchToProps)(WeatherSearch);
