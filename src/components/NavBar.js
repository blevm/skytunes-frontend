import React, { Fragment } from 'react';
import { Menu } from 'semantic-ui-react';
import { connect } from 'react-redux';
import { resetPage, logoutUser } from '../actions';
import { NavLink, Link, withRouter } from 'react-router-dom';
import Adapter from '../Adapter';

class NavBar extends React.Component {

  render() {
    return (
      <div>
        <Menu pointing secondary
          className='fixed'
          size='huge'
          style={{background: 'rgba(47, 100, 210, 1)', fontWeight: 'bold', fontFamily: 'Nunito, sans-serif'}}
          >
          <Menu.Item>
            <Link to='/weather'><img alt="sky tunes" style={{width: '150px'}} src={require('../skytuneslogo.png')} /></Link>
          </Menu.Item>
          {(Adapter.loggedIn()) ?
          <React.Fragment>
            <Menu.Item
              name='newWeatherSearch'
              style={{padding: '25px', color: 'white'}}
              onClick={() => this.props.resetPage()}
            />
            <Menu.Item
              as={NavLink}
              exact to='/locations'
              name='savedLocations'
              style={{padding: '25px', color: 'white'}}
            />
          </React.Fragment>
          : null}
          <Menu.Menu position='right'>
          {(this.props.currentUser !== '')
          ?
          <Fragment>
            <Menu.Item>
              <img alt="Spotify Profile" src={this.props.userImage} className="rounded" />
            </Menu.Item>
            <Menu.Item style={{padding: '25px 20px 25px 0px', color: 'white'}} >
              <strong>{this.props.currentUser}</strong>
            </Menu.Item>
            <Menu.Item
              style={{padding: '25px', color: 'white'}}
              name='logout'
              onClick={() => {
                this.props.logoutUser();
                this.props.history.push('/');
              }}
            />
          </Fragment>
          :
            <Menu.Item
              style={{padding: '25px', color: 'white', fontWeight: 'bold'}}
              name='loginThroughSpotify'
              href='http://localhost:4000/api/v1/login'
            />
          }
          </Menu.Menu>
        </Menu>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    userImage: state.user.userImage,
    currentUser: state.user.currentUser,
    weatherIcon: state.weather.weatherIcon
  }
}

// function mapDispatchToProps(dispatch) {
//   return {
//     resetPage: () => dispatch(resetPage())
//   }
// }

export default withRouter(connect(mapStateToProps, { resetPage, logoutUser })(NavBar));
