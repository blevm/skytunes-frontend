import React, { Fragment } from 'react';
import { Menu } from 'semantic-ui-react';
import { connect } from 'react-redux';
import { resetPage } from '../actions';
import { NavLink } from 'react-router-dom';

class NavBar extends React.Component {

  render() {
    return (
      <div>
        <Menu pointing secondary 
          className='fixed'
          size='huge'
          style={{background: 'rgba(255, 255, 255, 0.1)', fontWeight: 'bold', fontFamily: 'Nunito, sans-serif'}}
          >
          <Menu.Item>
            <img alt="sky tunes" style={{width: '150px'}} src={require('../skytuneslogo.png')} />
          </Menu.Item>
          {(this.props.currentUser) ?
          <React.Fragment>
            <Menu.Item
              name='newWeatherSearch'
              style={{padding: '25px', color: 'white'}}
              onClick={() => this.props.resetPage()}
            />
            <Menu.Item
              as={NavLink}
              to={`${this.props.currentUser}/locations`}
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
              href={`http://localhost:4000/api/v1/${this.props.currentUser}/logout`}
            />
          </Fragment>
          :
            <Menu.Item
              style={{padding: '25px', color: 'white', fontWeight: 'bold'}}
              name='loginThroughSpotify'
              href="http://localhost:4000/api/v1/login"
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

function mapDispatchToProps(dispatch) {
  return {
    resetPage: () => dispatch(resetPage())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(NavBar);
