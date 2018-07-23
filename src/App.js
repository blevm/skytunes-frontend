import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import WeatherContainer from './containers/WeatherContainer';
import RecommendationsContainer from './containers/RecommendationsContainer';
import { connect } from 'react-redux';


class App extends Component {

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={(this.props.userImage) ? this.props.userImage : logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome {(this.props.currentUser) ? this.props.currentUser : 'to React'}</h1>
        </header>
        <a href="http://localhost:4000/api/v1/login">
          CLICK TO DO A SPOTIFY LOGIN YOOOOOOO
        </a>
        <Router>
          <Route exact path="/success" component={() =>
              <WeatherContainer {...this.props} />
            }
          />
        </Router>
        {(this.props.weatherIcon !== '')
          ? <RecommendationsContainer />
          : null}
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    userImage: state.user.userImage,
    currentUser: state.user.currentUser,
    weatherIcon: state.weather.weatherIcon
  }
}

export default connect(mapStateToProps)(App);
