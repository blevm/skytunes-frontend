import React from 'react';
import WeatherSearch from '../components/WeatherSearch';
import CurrentWeather from '../components/CurrentWeather';
import { withRouter } from 'react-router-dom';
// import qs from "query-string";
import { connect } from 'react-redux';

class WeatherContainer extends React.Component {

  // componentDidMount() {
  //   if (this.props.currentUser === '') {
  //     let arr = this.props.location.pathname.split('/')
  //     console.log(arr[arr.length-1])
  //     this.props.fetchUser(arr[arr.length-1])
  //     this.props.history.push('/success')
  //   }
  //   // let arr = this.props.location.pathname.split('/')
  //   // console.log(arr[arr.length-1])
  //   // this.props.fetchUser(arr[arr.length-1])
  //   // this.props.history.push('/success')
  // }

  render() {
    console.log('condition', (this.props.weatherSummary !== '' || this.props.temperature), this.props)
    return(
      <React.Fragment>
        {(this.props.weatherSummary !== '' || this.props.temperature)
          ? null
          : <WeatherSearch />
        }
        <div className="ui loader"></div>
        {(this.props.weatherSummary !== '' || this.props.temperature !== '')
          ? <CurrentWeather />
          : null
        }
      </React.Fragment>
    )
  }
}

function mapStateToProps(state) {
  return {
    currentUser: state.user.currentUser,
    weatherSummary: state.weather.weatherSummary,
    temperature: state.weather.temperature
  }
}

// function mapDispatchToProps(dispatch) {
//   return {
//     setUser: data => dispatch(setUser(data))
//   }
// }

export default withRouter(connect(mapStateToProps)(WeatherContainer));
