import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import WeatherContainer from './containers/WeatherContainer';


class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <a href="http://localhost:4000/api/v1/login">
          CLICK TO DO A SPOTIFY LOGIN YOOOOOOO
        </a>
        <Router>
          <Route exact path="/success" component={WeatherContainer} />
        </Router>
      </div>
    );
  }
}

export default App;
