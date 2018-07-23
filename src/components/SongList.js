import React from 'react';
import Song from './Song';
import { connect } from 'react-redux';

const SongList = (props) => {
  return (
    <table style={{marginLeft: 'auto', marginRight:'auto'}}>
      <th>Play</th>
      <th>Song Title</th>
      <th>Artist</th>
      <tbody>
      {(props.tracks) ? props.tracks.map(track => <Song track={track} />) : <tr>'No Songs Yet'</tr>}
      </tbody>
    </table>
  )
}

function mapStateToProps(state) {
  return {
    tracks: state.music.tracks,
  }
}

export default connect(mapStateToProps)(SongList);
