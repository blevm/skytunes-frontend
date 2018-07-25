import React, { Component, Fragment } from 'react';
import { Menu } from 'semantic-ui-react';
import { connect } from 'react-redux';

class NavBar extends Component {
  state = { activeItem: 'home' }

  handleItemClick = (e, { name }) => this.setState({ activeItem: name })

  render() {
    const { activeItem } = this.state

    return (
      <div>
        <Menu pointing secondary
          size='large'
          style={{background: 'rgba(255, 255, 255, 0.5)'}}
          >
          <Menu.Item name='home' active={activeItem === 'home'} onClick={this.handleItemClick} />
          <Menu.Item
            name='weather'
            active={activeItem === 'messages'}
            onClick={this.handleItemClick}
          />
          <Menu.Item
            name='recommendations'
            active={activeItem === 'friends'}
            onClick={this.handleItemClick}
          />
          <Menu.Menu position='right'>
          {(this.props.currentUser !== '')
          ?
          <Fragment>
            <Menu.Item
              style={{
                padding: '2px'
              }}>
              <img src={this.props.userImage} className="rounded" />
            </Menu.Item>
            <Menu.Item
              style={{
                paddingLeft: '5px'
              }}>
              <strong>{this.props.currentUser}</strong>
            </Menu.Item>
            <Menu.Item
              name='logout'
              href={`http://localhost:4000/api/v1/${this.props.currentUser}/logout`}
            />
          </Fragment>
          :
            <Menu.Item
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

export default connect(mapStateToProps)(NavBar);
