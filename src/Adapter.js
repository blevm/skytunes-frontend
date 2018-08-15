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

  static getWeatherByZip(search) {
    return fetch(`${URL}/search-zip/${search}`, {
      headers: {
        "Content-Type": "application/json",
        "Authorization": localStorage.getItem('token')
      }
    })
    .then(resp =>  resp.json())
  }

  static getWeatherByCity(search) {
    return fetch(`${URL}/search-city/${search}`, {
      headers: {
        "Content-Type": "application/json",
        "Authorization": localStorage.getItem('token')
      }
    })
    .then(resp =>  resp.json())
  }

  static getIntlWeather(search) {
    return fetch(`${URL}/search-intl/${search}`, {
      headers: {
        "Content-Type": "application/json",
        "Authorization": localStorage.getItem('token')
      }
    })
    .then(resp =>  resp.json())
  }

  static getWeatherByCurrentLocation(result) {
    let lat = result.coords.latitude.toString()
    let long = result.coords.longitude.toString()

    return fetch(`${URL}/search-current/?lat=${lat}&long=${long}`, {headers: {
            "Content-Type": "application/json",
            "Authorization": localStorage.getItem('token')
          }})
    .then(resp =>  resp.json())
  }

  static getWeatherBySavedLocation(lat, long) {
    return fetch(`${URL}/search-current/?lat=${lat}&long=${long}`, {headers: {
            "Content-Type": "application/json",
            "Authorization": localStorage.getItem('token')
          }})
    .then(resp =>  resp.json())
  }

  static getSongRecommendations(weather) {
    return fetch(`${URL}/${weather}/recommended-tracks`, {headers: {
            "Content-Type": "application/json",
            "Authorization": localStorage.getItem('token')
          }})
    .then(resp => resp.json())
  }

  static getMoreSongRecommendations(weather) {
    return fetch(`${URL}/${weather}/more-recommended-tracks`, {headers: {
            "Content-Type": "application/json",
            "Authorization": localStorage.getItem('token')
          }})
    .then(resp => resp.json())
  }

  static makeAPlaylist(title, tracks) {
    let trackList = tracks.map(track => track.uri).join(',')
    let body = {
      method: 'POST',
      headers: {
        "Content-Type": "application/json",
        "Authorization": localStorage.getItem('token')
      },
      body: JSON.stringify({
        songs: trackList
      })
    }
    return fetch(`${URL}/${title}/new-playlist`, body)
  }

  static getUserLocations() {
    return fetch(`${URL}/locations`, {
      headers: {
        "Content-Type": "application/json",
        "Authorization": localStorage.getItem('token')
      }
    })
    .then(resp => resp.json())
  }

  static deleteALocation(id) {
    return fetch(`${URL}/locations/${id}`, {
      method: 'DELETE',
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
