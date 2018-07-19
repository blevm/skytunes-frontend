import React from 'react';
import Song from './Song'

const SongList = (props) => {
  return (
    <table style={{marginLeft: 'auto', marginRight:'auto'}}>
      <th>Play</th>
      <th>Song Title</th>
      <th>Artist</th>
      {(props.tracks) ? props.tracks.map(track => <Song track={track} />) : <tr>'No Songs Yet'</tr>}
    </table>
  )
}

export default SongList;
