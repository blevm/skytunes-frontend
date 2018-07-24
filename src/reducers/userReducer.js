const initialState = {
  currentUser: '',
  userImage: '',
}

function userReducer(state = initialState, action) {
  switch(action.type) {
    case "SETTING_USER":
      return {
        ...state,
        currentUser: action.payload.currentUser,
        userImage: action.payload.userImage
      }
    default:
     return state;
  }
}

export default userReducer;
