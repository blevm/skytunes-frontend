import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import WeatherContainer from './containers/WeatherContainer';
import RecommendationsContainer from './containers/RecommendationsContainer';
import { connect } from 'react-redux';
import NavBar from './components/NavBar';


class App extends Component {

  render() {
    return (
      <div className="App">
        <NavBar />
        <Router>
          <Route exact path="/success" component={() =>
              <WeatherContainer {...this.props} />
            }
          />
        </Router>
        {(this.props.weatherIcon !== '')
          ? <RecommendationsContainer />
          : null}
        {(this.props.currentUser === '')
          ? <div className="home-page flex-fill" style={{align: "center"}}/>
          : null}
        <br></br>
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
