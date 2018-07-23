const initialState = {
  tracks: [],
  selectedTracks: [],
}

function musicReducer(state = initialState, action) {
  switch(action.type) {
    case "SONGS_LOADED":
      return {
        ...state,
        tracks: action.payload.tracks
      }
    case "SONG_CLICKED":
        return {
          ...state,
          selectedTracks: [...state.selectedTracks, action.payload]
      }
    default:
     return state;
  }
}

export default musicReducer;
