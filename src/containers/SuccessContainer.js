import React from 'react';
import { fetchUser } from '../actions';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

class SuccessContainer extends React.Component {
  componentDidMount() {
    if (this.props.currentUser === '') {
      let arr = this.props.location.pathname.split('/')
      console.log(arr[arr.length-1])
      this.props.fetchUser(arr[arr.length-1])
      this.props.history.push('/weather')
    }
  }

  render() {
    return (null)
  }
}

function mapStateToProps(state) {
  return {
    currentUser: state.user.currentUser,
  }
}

// function mapDispatchToProps(dispatch) {
//   return {
//     setUser: data => dispatch(setUser(data))
//   }
// }

export default withRouter(connect(mapStateToProps, { fetchUser })(SuccessContainer));
