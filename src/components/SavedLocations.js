import React from 'react';
import Adapter from '../Adapter';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

class SavedLocations extends React.Component {

  state = {
    locations: []
  }

  componentDidMount() {
    // debugger
    Adapter.getUserLocations()
    .then(data => this.setState({
      locations: data
    }))
  }

  render() {
    console.log(this.state.locations)
    return (
      <div>{(this.state.locations) ? this.state.locations.map(location =>
        <React.Fragment>
          <h1>{location.city}</h1>
          <h1>{location.state}</h1>
        </React.Fragment>
      ) : null}
      </div>
    )
  }

}

function mapStateToProps(state) {
  return {
    currentUser: state.user.currentUser
  }
}

export default withRouter(connect(mapStateToProps)(SavedLocations));
