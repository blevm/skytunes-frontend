import React from 'react';
import Song from './Song';
import { connect } from 'react-redux';
import Adapter from '../Adapter';
import { Table, Icon, Button } from 'semantic-ui-react';
import { selectOwnSongs } from '../actions';

class SongList extends React.Component {

  render() {
    console.log('selectedTracks', this.props.selectedTracks)
    return (
      <div style={{margin: '100px'}}>
        <Table basic='very' size='large'>
          <Table.Header fullWidth>
            <Table.Row>
              <Table.HeaderCell style={(this.props.selectSongs) ? {display: "inline"} : {display: "none"}}>+</Table.HeaderCell>
              <Table.HeaderCell>Song Title</Table.HeaderCell>
              <Table.HeaderCell>Artist</Table.HeaderCell>
              <Table.HeaderCell>Play Preview</Table.HeaderCell>
            </Table.Row>
          </Table.Header>

          <Table.Body>
            {(this.props.tracks) ? this.props.tracks.map(track => <Song track={track} selectSongs={this.props.selectSongs} />) : <tr>'No Songs Yet'</tr>}
          </Table.Body>

          <Table.Footer fullWidth>
            <Table.Row>
              <Table.HeaderCell colSpan='8'>
                {(this.props.tracks) ? <Button floated='right' icon labelPosition='left' primary size='small' onClick={() => Adapter.makeAPlaylist(this.props.currentUser, `It's ${this.props.weatherTitle} in ${this.props.weatherCity}`, ((this.props.selectedTracks === []) ? this.props.tracks : this.props.selectedTracks))}>
                  <Icon name='music' /> Create A Spotify Playlist
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

function mapDispatchToProps(dispatch) {
  return {
    selectOwnSongs: () => dispatch(selectOwnSongs())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(SongList);
