import React from 'react';

const SongList = (props) => {
  return (
    <React.Fragment>
      {(props.tracks) ? props.tracks.map(track => <h4>{track.name}, {track.artists[0].name}</h4>) : <h4>'No Songs Yet'</h4>}
    </React.Fragment>
  )
}

export default SongList;
