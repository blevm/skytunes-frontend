import _ from 'lodash';

const initialState = {
  tracks: [],
  selectedTracks: [],
  selectSongs: false,
}

function musicReducer(state = initialState, action) {
  switch(action.type) {
    case "SONGS_LOADED":
      return {
        ...state,
        tracks: action.payload.tracks
      }
    case "ADD_TRACK":
      console.log('adding', action.payload)
      return {
        ...state,
        selectedTracks: [...state.selectedTracks, action.payload]
      }
    case "REMOVE_TRACK":
      console.log('removing', action.payload)
      let songList = [...state.selectedTracks]
      _.pull(songList, action.payload)
      console.log(songList)

      return {
        ...state,
        selectedTracks: songList
      }
    case "SELECT_SONGS":
      return {
        ...state,
        selectSongs: true
      }
    case "CLEAR_TRACKS":
      return {
        ...state,
        tracks: [],
        selectedTracks: [],
        selectSongs: false,
      }
    default:
     return state;
  }
}

export default musicReducer;
