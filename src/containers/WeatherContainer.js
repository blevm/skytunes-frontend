import React from 'react';
import WeatherSearch from '../components/WeatherSearch';

class WeatherContainer extends React.Component {
  constructor() {
    super()

    this.state = {
      searchTerm: ''
    }
  }

  handleChange = (e) => {
    this.setState({
      searchTerm: e.target.value
    }, ()=>{console.log(this.state.searchTerm)})
  }

  render() {
    return(
      <React.Fragment>
        <div>YEAH WE LOGGED IN OMG</div>
        <WeatherSearch
          searchTerm={this.state.searchTerm}
          handleChange={this.handleChange}
        />
      </React.Fragment>
    )
  }
}

export default WeatherContainer
