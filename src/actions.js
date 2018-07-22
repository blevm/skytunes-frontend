export function zipWeatherSearch(searchTerm) {
  return {
    type: "ZIP_SEARCH",
    payload: { searchTerm }
  }
}

export function cityWeatherSearch(searchTerm) {
  return {
    type: "CITY_SEARCH",
    payload: { searchTerm }
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
