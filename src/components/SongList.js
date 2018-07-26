import React from 'react';
import Song from './Song';
import { connect } from 'react-redux';
import { Table, Icon, Button } from 'semantic-ui-react';
import { selectOwnSongs, createPlaylistThenResetPage } from '../actions';

class SongList extends React.Component {

  render() {
    console.log('tracks', this.props.tracks)
    return (
      <div style={{margin: '10px 100px', padding: '10px'}}>
        <Table basic='very' size='large' style={{fontFamily: 'Nunito, sans-serif'}}>
          <Table.Header fullWidth>
            <Table.Row>
              <Table.HeaderCell style={(this.props.selectSongs) ? {display: "inline"} : {display: "none"}}>+</Table.HeaderCell>
              <Table.HeaderCell>Song Title</Table.HeaderCell>
              <Table.HeaderCell>Artist</Table.HeaderCell>
              <Table.HeaderCell>Preview Song</Table.HeaderCell>
            </Table.Row>
          </Table.Header>

          <Table.Body style={{overflowX: 'scroll'}}>
            {(this.props.tracks) ? this.props.tracks.map(track => <Song track={track} selectSongs={this.props.selectSongs} />) : <tr>'No Songs Yet'</tr>}
          </Table.Body>

          <Table.Footer fullWidth>
            <Table.Row>
              <Table.HeaderCell colSpan='8'>
                {(this.props.tracks) ? <Button floated='right' icon labelPosition='left' primary size='small' onClick={() => {
                  this.props.createPlaylistThenResetPage(this.props.currentUser, `It's ${this.props.weatherTitle} in ${this.props.weatherCity}`, ((this.props.selectedTracks.length > 0) ? this.props.selectedTracks : this.props.tracks))}}>
                  <Icon name='music' />{(!this.props.selectSongs) ? 'Create A Spotify Playlist With All Songs' : 'Create A Spotify Playlist With Selected Songs'}
                </Button> : null}
                <Button size='small' floated='left 'onClick={this.props.selectOwnSongs}>Select From These Tracks</Button>
              </Table.HeaderCell>
            </Table.Row>
          </Table.Footer>

        </Table>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    selectSongs: state.music.selectSongs,
    tracks: state.music.tracks,
    selectedTracks: state.music.selectedTracks,
    currentUser: state.user.currentUser,
    weatherTitle: state.weather.weatherTitle,
    weatherCity: state.weather.weatherCity
  }
}

// function mapDispatchToProps(dispatch) {
//   return {
//     selectOwnSongs: () => dispatch(selectOwnSongs()),
//     createPlaylistThenResetPage: () => dispatch(createPlaylistThenResetPage())
//   }
// }

export default connect(mapStateToProps, {selectOwnSongs, createPlaylistThenResetPage})(SongList);
