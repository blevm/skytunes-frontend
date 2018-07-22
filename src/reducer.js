const initialState = {
  //set default state values here
  currentUser: '',
  userImage: '',
  weatherIcon: '',
  zipSearch: '',
  citySearch: '',
  weatherCity: '',
  weatherTitle: '',
  weatherSummary: '',
  temperature: ''
}

export function reducer(state = initialState, action) {
  switch(action.type) {
    case "SETTING_USER":
      return {
        ...state,
        currentUser: action.payload.username,
        userImage: action.payload.image
      }
    case "ZIP_SEARCH":
      return {
        ...state,
      }
    case "CITY_SEARCH":
      return {
        ...state,
      }
    default:
     return state;
  }
}
