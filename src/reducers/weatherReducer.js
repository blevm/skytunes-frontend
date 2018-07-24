const initialState = {
  weatherIcon: '',
  zipSearch: '',
  citySearch: '',
  weatherCity: '',
  weatherTitle: '',
  weatherSummary: '',
  temperature: ''
}

function weatherReducer(state = initialState, action) {
  switch(action.type) {
    case "SEARCH":
      return {
        ...state,
        weatherCity: action.payload.weatherCity,
        weatherTitle: action.payload.weatherTitle,
        weatherSummary: action.payload.weatherSummary,
        temperature: action.payload.temperature,
        weatherIcon: action.payload.weatherIcon,
      };
    default:
     return state;
  }
}

export default weatherReducer;
