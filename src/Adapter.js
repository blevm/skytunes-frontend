const URL = 'http://localhost:4000/api/v1';

export default class Adapter {
  static getWeatherByZip(search) {
    return fetch(`${URL}/search-zip/${search}`)
    .then(resp =>  resp.json())
  }

  static getWeatherByCity(search) {
    return fetch(`${URL}/search-city/${search}`)
    .then(resp =>  resp.json())
  }

  static getSongRecommendations(user, weather) {
    return fetch(`${URL}/${user}/${weather}/recommended-tracks`)
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
}
