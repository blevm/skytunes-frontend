const URL = 'http://localhost:4000/api/v1';

export default class Adapter {

  static loggedIn() {
    return (!!localStorage.getItem('token'))
  }

  static getUser(k) {
    return fetch(`${URL}/current-user/${k}`)
    .then(resp => resp.json())
  }

  static persistUser() {
    return fetch(`${URL}/user-check`, {
      headers: {
        "Content-Type": "application/json",
        "Authorization": localStorage.getItem('token')
      }
    }).then(resp => resp.json())
  }

  static getWeatherByZip(user, search) {
    console.log('searching in the adapter', search)
    return fetch(`${URL}/search-zip/${user}/${search}`)
    .then(resp =>  resp.json())
  }

  static getWeatherByCity(user, search) {
    return fetch(`${URL}/search-city/${user}/${search}`)
    .then(resp =>  resp.json())
  }

  static getIntlWeather(user, search) {
    return fetch(`${URL}/search-intl/${user}/${search}`)
    .then(resp =>  resp.json())
  }

  static getWeatherByCurrentLocation(user, result) {
    let lat = result.coords.latitude.toString()
    let long = result.coords.longitude.toString()

    return fetch(`${URL}/${user}/search-current/?lat=${lat}&long=${long}`)
    .then(resp =>  resp.json())
  }

  static getSongRecommendations(user, weather) {
    return fetch(`${URL}/${user}/${weather}/recommended-tracks`)
    .then(resp => resp.json())
  }

  static getMoreSongRecommendations(user, weather) {
    return fetch(`${URL}/${user}/${weather}/more-recommended-tracks`)
    .then(resp => resp.json())
  }

  static makeAPlaylist(user, title, tracks) {
    let trackList = tracks.map(track => track.uri).join(',')
    let body = {
      method: 'POST',
      body: JSON.stringify({
        songs: trackList
      })
    }
    return fetch(`${URL}/${user}/${title}/new-playlist`, body)
  }

  static getUserLocations(user) {
    return fetch(`${URL}/locations`, {
      headers: {
        "Content-Type": "application/json",
        "Authorization": localStorage.getItem('token')
      }
    })
    .then(resp => resp.json())
  }

  static logout() {
    return fetch(`http://localhost:4000/api/v1/logout`, {
      headers: {
        "Content-Type": "application/json",
        "Authorization": localStorage.getItem('token')
      }
    })
    .then(resp => resp.json())
  }

}
