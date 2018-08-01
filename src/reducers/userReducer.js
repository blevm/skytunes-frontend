import _ from 'lodash';

const initialState = {
  currentUser: '',
  userImage: '',
  locations: []
}

function userReducer(state = initialState, action) {
  switch(action.type) {
    case "SETTING_USER":
      return {
        ...state,
        currentUser: action.payload.currentUser,
        userImage: action.payload.userImage
      }
    case "LOAD_LOCATIONS":
      return {
        ...state,
        locations: action.payload,
      }
    case "REMOVE_LOCATION":
      let userLocations = [...state.locations]
      let deletedLocaton = userLocations.find(loc => loc.id === action.payload.location_id)
      _.pull(userLocations, deletedLocaton)

      return {
        ...state,
        locations: userLocations,
      }
    default:
     return state;
  }
}

export default userReducer;
