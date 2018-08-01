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
  return {
    type: "SONGS_LOADED",
    payload: tracks
  }
}

export function addToTrackList(tracks) {
  return {
    type: "MORE_RECOMMENDATIONS",
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

export function backToAllTracks() {
  return {
    type: "CLEAR_SELECTIONS"
  }
}

export function addUserLocations(data) {
  return {
    type: "LOAD_LOCATIONS",
    payload: data
  }
}

export function removeLocation(data) {
  return {
    type: "REMOVE_LOCATION",
    payload: data
  }
}

export function fetchUser(k) {
  return function(dispatch) {
    Adapter.getUser(k)
    .then(data => {
      dispatch(setUser(data))
      localStorage.setItem('token', data.token);
    })
  }
}

export function refreshUser() {
  return function(dispatch) {
    Adapter.persistUser()
    .then(data => {
      dispatch(setUser(data))
    })
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

export function fetchIntlWeather(user, resp) {
  return function(dispatch) {
    Adapter.getIntlWeather(user, resp)
    .then(data => dispatch(weatherSearch(data)))
  }
}

export function fetchSongRecs(weather) {
  return function(dispatch) {
    Adapter.getSongRecommendations(weather)
    .then(data => dispatch(setTrackList(data)))
  }
}

export function fetchMoreSongRecs(weather) {
  return function(dispatch) {
    Adapter.getMoreSongRecommendations(weather)
    .then(data => dispatch(addToTrackList(data)))
  }
}

export function createPlaylistThenResetPage(title, songs) {
  return function(dispatch) {
    Adapter.makeAPlaylist(title, songs)
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

export function loadLocations() {
  return function(dispatch) {
    Adapter.getUserLocations()
    .then(data =>
      dispatch(addUserLocations(data)))
  }
}

export function logoutUser() {
  return function(dispatch) {
    Adapter.logout()
    .then(() => {
      dispatch(setUser({username: '', image: '', locations: []}));
      localStorage.removeItem('token');
    })
  }
}

export function fetchWeatherFromSavedLocation(lat, long, props) {
  return function(dispatch) {
    Adapter.getWeatherBySavedLocation(lat, long)
    .then(data => {
      dispatch(weatherSearch(data))
      props.history.push('/weather')
    })
  }
}

export function removeALocaton(id) {
  return function(dispatch) {
    Adapter.deleteALocation(id)
    .then(data => {
      dispatch(removeLocation(data))
    })
  }
}
