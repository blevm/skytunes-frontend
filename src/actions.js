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

export function clearWeather() {
  return {
    type: "CLEAR_WEATHER",
  }
}

export function setTrackList(tracks) {
  console.log('inSetTrackList', tracks)
  return {
    type: "SONGS_LOADED",
    payload: tracks
  }
}

export function clearTracks() {
  return {
    type: "CLEAR_TRACKS",
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

export function fetchWeatherByZip(user, zip) {
  return function(dispatch) {
    Adapter.getWeatherByZip(user, zip)
    .then(data => dispatch(weatherSearch(data)))
  }
}

export function fetchWeatherByCity(user, city) {
  return function(dispatch) {
    Adapter.getWeatherByCity(user, city)
    .then(data => dispatch(weatherSearch(data)))
  }
}

export function fetchWeatherByCurrentLocation(user, resp) {
  return function(dispatch) {
    Adapter.getWeatherByCurrentLocation(user, resp)
    .then(data => dispatch(weatherSearch(data)))
  }
}

export function fetchIntlWeather(user, resp) {
  return function(dispatch) {
    Adapter.getIntlWeather(user, resp)
    .then(data => dispatch(weatherSearch(data)))
  }
}

export function fetchSongRecs(user, weather) {
  return function(dispatch) {
    Adapter.getSongRecommendations(user, weather)
    .then(data => dispatch(setTrackList(data)))
  }
}

export function createPlaylistThenResetPage(user, title, songs) {
  return function(dispatch) {
    Adapter.makeAPlaylist(user, title, songs)
    .then(data => {
      dispatch(clearTracks())
      dispatch(clearWeather())
    })
  }
}

export function resetPage() {
  return function(dispatch) {
    dispatch(clearTracks())
    dispatch(clearWeather())
  }
}
