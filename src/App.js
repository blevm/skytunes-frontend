import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import WeatherContainer from './containers/WeatherContainer';
import RecommendationsContainer from './containers/RecommendationsContainer';
import { connect } from 'react-redux';


class App extends Component {
  constructor() {
    super();

    this.state = {
      currentUser: '',
      userImage: '',
      weatherIcon: '',
      zipSearch: '',
      citySearch: '',
      weatherCity: '',
      weatherTitle: '',
      weatherSummary: '',
      temperature: ''
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

  // handleChange = (e, name) => {
  //   this.setState({
  //     [name]: e.target.value
  //   }, ()=>{console.log(this.state)})
  // }

  handleSubmit = (type, searchTerm) => {
    if (type === 'zip') {
      fetch(`http://localhost:4000/api/v1/search-zip/${searchTerm}`)
      .then(resp =>  resp.json())
      .then(data => this.setState({
        weatherCity: (data.city) ? data.city : '',
        weatherTitle: (data.currently) ? data.currently.summary : '',
        weatherSummary: (data.minutely) ? data.minutely.summary : '',
        temperature: (data.currently) ? data.currently.temperature : '',
        weatherIcon: (data.currently) ? data.currently.icon : ''
      }))
    } else if (type === 'city') {
      fetch(`http://localhost:4000/api/v1/search-city/${searchTerm}`)
      .then(resp =>  resp.json())
      .then(data => this.setState({
        weatherCity: (data.city) ? data.city : '',
        weatherTitle: (data.currently) ? data.currently.summary : '',
        weatherSummary: (data.minutely) ? data.minutely.summary : '',
        temperature: (data.currently) ? data.currently.temperature : '',
        weatherIcon: (data.currently) ? data.currently.icon : ''
      }))
    }
  }

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
                {...this.state}
                handleChange={this.handleChange}
                handleSubmit={this.handleSubmit}
                setUser={this.setUser}
                currentUser={this.state.currentUser}
                getWeatherIcon={this.getWeatherIcon}
              />
            }
          />
        </Router>
        {(this.state.weatherIcon !== '')
          ? <RecommendationsContainer
          currentUser={this.state.currentUser} weatherIcon={this.state.weatherIcon}
          />
          : null}
      </div>
    );
  }
}

export default connect()(App);
