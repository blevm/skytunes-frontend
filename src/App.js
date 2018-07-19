import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import WeatherContainer from './containers/WeatherContainer';
import RecommendationsContainer from './containers/RecommendationsContainer';


class App extends Component {
  constructor() {
    super();

    this.state = {
      currentUser: '',
      userImage: '',
      weatherIcon: ''
    }
  }

  getWeatherIcon = (icon) => {
    this.setState({
      weatherIcon: icon,
    }, ()=> console.log('setting weather', this.state))
  }

  setUser = (data) => {
    this.setState({
      currentUser: data.username,
      userImage: data.image
    }, ()=> console.log('setting user', this.state))
  }
  //
  // {(this.state.weatherIcon !== '')
  //   ? <RecommendationsContainer
  //   currentUser={this.state.currentUser} weatherIcon={this.state.weatherIcon}
  //   />
  //   : null}

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={(this.state.userImage) ? this.state.userImage : logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome {(this.state.currentUser) ? this.state.currentUser : 'to React'}</h1>
        </header>
        <a href="http://localhost:4000/api/v1/login">
          CLICK TO DO A SPOTIFY LOGIN YOOOOOOO
        </a>
        <Router>
          <Route exact path="/success" component={() =>
              <WeatherContainer {...this.props}
                setUser={this.setUser}
                currentUser={this.state.currentUser}
                getWeatherIcon={this.getWeatherIcon}
              />
            }
          />
        </Router>
      </div>
    );
  }
}

export default App;
