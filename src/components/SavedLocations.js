import React from 'react';
import Adapter from '../Adapter';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

class SavedLocations extends React.Component {

  state = {
    locations: []
  }

  componentDidMount() {
    Adapter.getUserLocations(this.props.currentUser)
    .then(data => this.setState({
      locations: data
    }))
  }

  render() {
    return (
      <div>OK WE'RE HERE</div>
    )
  }

}

function mapStateToProps(state) {
  return {
    currentUser: state.user.currentUser
  }
}

export default withRouter(connect(mapStateToProps)(SavedLocations));
