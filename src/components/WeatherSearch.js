import React from 'react';

class WeatherSearch extends React.Component {
  constructor() {
    super()

    this.state = {
      zipSearch: '',
      citySearch: ''
    }
  }

  handleChange = (e, name) => {
    this.setState({
      [name]: e.target.value
    }, ()=>{console.log(this.state)})
  }

render() {
  return (
    <React.Fragment>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          this.props.handleSubmit('zip', this.state.zipSearch)}}
      >
        <input
          type="text"
          placeholder="Enter Zip Code"
          value={this.state.zipSearch}
          style={{width: '300px'}}
          onChange={(event) => this.handleChange(event, 'zipSearch')}
        />
        <input
          type="submit"
          value="Get the Weather"
        />
      </form>
      <form onSubmit={(e) => {
          e.preventDefault();
          this.props.handleSubmit('city', this.state.citySearch)}}>
        <input
          type="text"
          placeholder="Enter City, State"
          value={this.state.citySearch}
          style={{width: '300px'}}
          onChange={(event) => this.handleChange(event, 'citySearch')}
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

export default WeatherSearch;
