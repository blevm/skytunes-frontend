import React, { Component } from 'react';
import './App.css';
import { Switch, Route, withRouter } from 'react-router-dom';
import WeatherContainer from './containers/WeatherContainer';
import RecommendationsContainer from './containers/RecommendationsContainer';
import SuccessContainer from './containers/SuccessContainer';
import { connect } from 'react-redux';
import NavBar from './components/NavBar';
import SavedLocations from './components/SavedLocations';
import Adapter from './Adapter';
import { refreshUser } from './actions';


class App extends Component {
  componentDidMount() {
    if (Adapter.loggedIn()) {
      this.props.refreshUser()
    }
  }

  render() {
    return (
      <div className="App">
        <NavBar />
        <Switch>
          <React.Fragment>
            <Route path="/success" component={() =>
                <SuccessContainer {...this.props} />
              }
            />
            <Route path="/weather" component={() =>
                <React.Fragment>
                  <WeatherContainer {...this.props} />
                  {(this.props.weatherIcon !== '')
                    ? <RecommendationsContainer />
                    : null}
                </React.Fragment>
              }
            />
          <Route exact path='/locations' component={SavedLocations} />
          </React.Fragment>
        </Switch>

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

export default withRouter(connect(mapStateToProps, { refreshUser })(App));
