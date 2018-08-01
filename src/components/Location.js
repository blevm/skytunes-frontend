import React from 'react';
import { Card, Button, Divider } from 'semantic-ui-react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { fetchWeatherFromSavedLocation, removeALocaton } from '../actions';

const Location = (props) => {

  const makeTheHeader = (place) => {
    if (place.search_type === 'zipSearch') {
      return (
        <React.Fragment>
        <p>You searched by zip code for:</p>
        <h2 style={{fontFamily: 'Nunito, sans-serif'}}>
        {place.zip}
        </h2>
        </React.Fragment>
      )
    } else if (place.search_type === "citySearch") {
      console.log("we're in city Search")
      return (
        <React.Fragment>
        <p>You searched by city & state for:</p>
        <h2 style={{fontFamily: 'Nunito, sans-serif'}}>
        {place.city}, {place.state}
        </h2>
        </React.Fragment>
      )
    } else if (place.search_type === 'intlSearch') {
      return (
        <React.Fragment>
        <p>You searched internationally for:</p>
        <h2 style={{fontFamily: 'Nunito, sans-serif'}}>
        {(place.city === place.state) ? place.state : `${place.city}, ${place.state}`}
        </h2>
        </React.Fragment>
      )
    }
  }

  return (
    <Card style={{margin: '20px', padding: '20px', background: 'rgba(255, 255, 255, 0.8)'}}>
      <Card.Header style={{padding: '10px'}}>
        {makeTheHeader(props.place)}
      </Card.Header>
      <Divider />
      <div className='ui two buttons' >
        <Button basic
          color='teal'
          style={{fontFamily: 'Nunito, sans-serif', fontWeight: 'bold'}}
          onClick={() => {
            props.fetchWeatherFromSavedLocation(props.place.lat, props.place.long, props)
          }}
        >
          Get The Current Weather
        </Button>
        <Button basic
          color='red'
          style={{fontFamily: 'Nunito, sans-serif', fontWeight: 'bold', background: 'rgba(255, 255, 255, 1)'}}
          onClick={() => props.removeALocaton(props.place.id)}
        >
          Remove This Location
        </Button>
      </div>
    </Card>
  )
}

export default withRouter(connect(null, { fetchWeatherFromSavedLocation, removeALocaton })(Location));
