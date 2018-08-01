import React from 'react';
// import Adapter from '../Adapter';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { Card } from 'semantic-ui-react';
import { loadLocations } from '../actions';
import UUID from 'uuid';
import Location from './Location';

class SavedLocations extends React.Component {

  componentDidMount() {
    this.props.loadLocations()
  }

  render() {
    return (
      <React.Fragment>
      <h1 style={{fontFamily: 'Nunito, sans-serif'}}>Previously Searched Locations</h1>
      <Card.Group centered style={{margin: '40px'}}>
      {(this.props.locations)
           ? this.props.locations.map(location =>
           <Location key={UUID()} place={location} />
         )
         : null}
      </Card.Group>
      </React.Fragment>
    )
  }

}

function mapStateToProps(state) {
  return {
    locations: state.user.locations
  }
}

export default withRouter(connect(mapStateToProps, { loadLocations })(SavedLocations));
