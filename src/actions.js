import Adapter from './Adapter';

export function weatherSearch(data) {
  let dataToSend = {
    weatherCity: (data.city) ? data.city : '',
    weatherTitle: (data.currently) ? data.currently.summary : '',
    weatherSummary: (data.minutely) ? data.minutely.summary : '',
    temperature: (data.currently) ? data.currently.temperature : '',
    weatherIcon: (data.currently) ? data.currently.icon : ''
  }
  
  return {
    type: "SEARCH",
    payload: dataToSend
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

export function addTrack(data) {
  return {
    type: "ADD_TRACK",
    payload: data
  }
}

export function removeTrack(data) {
  return {
    type: "REMOVE_TRACK",
    payload: data
  }
}

export function selectOwnSongs() {
  return {
    type: "SELECT_SONGS"
  }
}

export function fetchWeatherByZip(zip) {
  return function(dispatch) {
    Adapter.getWeatherByZip(zip)
    .then(data => dispatch(weatherSearch(data)))
  }
}

export function fetchWeatherByCity(city) {
  return function(dispatch) {
    Adapter.getWeatherByCity(city)
    .then(data => dispatch(weatherSearch(data)))
  }
}

export function fetchWeatherByCurrentLocation(resp) {
  return function(dispatch) {
    Adapter.getWeatherByCurrentLocation(resp)
    .then(data => dispatch(weatherSearch(data)))
  }
}

export function fetchIntlWeather(resp) {
  return function(dispatch) {
    Adapter.getIntlWeather(resp)
    .then(data => dispatch(weatherSearch(data)))
  }
}

export function fetchSongRecs(user, weather) {
  return function(dispatch) {
    Adapter.getSongRecommendations(user, weather)
    .then(data => dispatch(setTrackList(data)))
  }
}
