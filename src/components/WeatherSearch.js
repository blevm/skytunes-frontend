import React from 'react';

const WeatherSearch = (props) => {
  return (
    <React.Fragment>
      <form
        onSubmit={(e) => {props.handleSubmit(e, 'zip')}}
      >
      <input
        type="text"
        placeholder="Enter Zip Code"
        value={props.zipSearch}
        style={{width: '300px'}}
        onChange={(event) => props.handleChange(event, 'zipSearch')}
      />
      <input
        type="submit"
        value="Get the Weather"
      />
    </form>
    <form
      onSubmit={(e) => {props.handleSubmit(e, 'city')}}
    >
    <input
      type="text"
      placeholder="Enter City, State"
      value={props.citySearch}
      style={{width: '300px'}}
      onChange={(event) => props.handleChange(event, 'citySearch')}
    />
    <input
      type="submit"
      value="Get the Weather"
    />
  </form>
  <form
    onSubmit={(e) => {props.handleSubmit(e, 'city')}}
  >
</form>

    </React.Fragment>
  )
}

export default WeatherSearch;
