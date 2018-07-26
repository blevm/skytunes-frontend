import React, { Component, Fragment } from 'react';
import { Menu, Button } from 'semantic-ui-react';
import { connect } from 'react-redux';
import { resetPage } from '../actions';

class NavBar extends Component {

  render() {
    return (
      <div>
        <Menu pointing secondary
          size='big'
          color='white'
          style={{background: 'rgba(255, 255, 255, 0.1)', fontWeight: 'bold', fontFamily: 'Nunito, sans-serif'}}
          >
          <Menu.Item
            name='sky tunes'
            style={{padding: '25px', color: 'white'}}
          />
          <Menu.Item
            name='newWeatherSearch'
            style={{padding: '25px', color: 'white'}}
            onClick={() => this.props.resetPage()}
          />
          <Menu.Item
            name='savedLocations'
            style={{padding: '25px', color: 'white'}}
          />
          <Menu.Menu position='right'>
          {(this.props.currentUser !== '')
          ?
          <Fragment>
            <Menu.Item>
              <img src={this.props.userImage} className="rounded" />
            </Menu.Item>
            <Menu.Item style={{padding: '25px 20px 25px 0px', color: 'white'}} >
              <strong>{this.props.currentUser}</strong>
            </Menu.Item>
            <Menu.Item
              color='white'
              style={{padding: '25px', color: 'white'}}
              name='logout'
              href={`http://localhost:4000/api/v1/${this.props.currentUser}/logout`}
            />
          </Fragment>
          :
            <Menu.Item
              color='white'
              style={{padding: '25px', color: 'white', fontWeight: 'bold'}}
              name='login'
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
