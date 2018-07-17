import React from 'react';

const WeatherSearch = (props) => {
  return (
    <React.Fragment>
      <form
        onSubmit={(e) => {props.handleSubmit(e)}}
      >
      <input
        type="text"
        placeholder="Enter City/State or Zip Code"
        value={props.searchTerm}
        style={{width: '300px'}}
        onChange={(event) => props.handleChange(event)}
      />
      <input
        type="submit"
        value="Get the Weather"

      />
    </form>
    </React.Fragment>
  )
}

export default WeatherSearch;
