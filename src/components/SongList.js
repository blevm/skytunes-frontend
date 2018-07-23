import React from 'react';
import Song from './Song';
import { connect } from 'react-redux';
import Adapter from '../Adapter';

const SongList = (props) => {
  console.log(props.tracks.map(track => track.uri))
  return (
    <React.Fragment>
      <table style={{marginLeft: 'auto', marginRight:'auto'}}>
        <th>Play</th>
        <th>Song Title</th>
        <th>Artist</th>
        <tbody>
        {(props.tracks) ? props.tracks.map(track => <Song track={track} />) : <tr>'No Songs Yet'</tr>}
        </tbody>
      </table>
      {(props.tracks) ? <button onClick={() => Adapter.makeAPlaylist(props.currentUser, `It's ${props.weatherTitle} in ${props.weatherCity}`, props.tracks)}>Create a Spotify Playlist</button> : null}
    </React.Fragment>
  )
}

function mapStateToProps(state) {
  return {
    tracks: state.music.tracks,
    currentUser: state.user.currentUser,
    weatherTitle: state.weather.weatherTitle,
    weatherCity: state.weather.weatherCity
  }
}

export default connect(mapStateToProps)(SongList);
