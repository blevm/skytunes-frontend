import Adapter from './Adapter';

export function weatherSearch(data) {
  return {
    type: "SEARCH",
    payload: data
  }
}

export function setTrackList(tracks) {
  console.log('inSetTrackList', tracks)
  return {
    type: "SONGS_LOADED",
    payload: tracks
  }
}

export function setUser(data) {
  return {
    type: "SETTING_USER",
    payload: {
      currentUser: data.username,
      userImage: data.image
    }
  }
}

export function fetchWeatherByZip(zip) {
  return function(dispatch) {
    Adapter.getWeatherByZip(zip)
    .then(data => dispatch(weatherSearch({
      weatherCity: (data.city) ? data.city : '',
      weatherTitle: (data.currently) ? data.currently.summary : '',
      weatherSummary: (data.minutely) ? data.minutely.summary : '',
      temperature: (data.currently) ? data.currently.temperature : '',
      weatherIcon: (data.currently) ? data.currently.icon : ''
    })))
  }
}

export function fetchWeatherByCity(city) {
  return function(dispatch) {
    Adapter.getWeatherByCity(city)
    .then(data => dispatch(weatherSearch({
      weatherCity: (data.city) ? data.city : '',
      weatherTitle: (data.currently) ? data.currently.summary : '',
      weatherSummary: (data.minutely) ? data.minutely.summary : '',
      temperature: (data.currently) ? data.currently.temperature : '',
      weatherIcon: (data.currently) ? data.currently.icon : ''
    })))
  }
}

export function fetchSongRecs(user, weather) {
  return function(dispatch) {
    Adapter.getSongRecommendations(user, weather)
    .then(data => dispatch(setTrackList(data)))
  }
}
