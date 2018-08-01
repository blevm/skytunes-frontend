import React, { Component, Fragment } from 'react';
import Song from './Song';
import { connect } from 'react-redux';
import { Table, Icon, Button } from 'semantic-ui-react';
import { selectOwnSongs, backToAllTracks, createPlaylistThenResetPage, fetchMoreSongRecs, resetPage } from '../actions';
import UUID from 'uuid';

class SongList extends Component {

  render() {
    return (
      <Fragment>
      <div style={{margin: '10px 200px 50px 200px'}}>
        <Table basic='very' size='large' style={{fontFamily: 'Nunito, sans-serif'}}>
          <Table.Header fullWidth>
            <Table.Row>
              <Table.HeaderCell style={(this.props.selectSongs) ? {display: "inline"} : {display: "none"}}><Icon name='check square outline' /></Table.HeaderCell>
              <Table.HeaderCell>Song Title</Table.HeaderCell>
              <Table.HeaderCell>Artist</Table.HeaderCell>
              <Table.HeaderCell>Preview Song</Table.HeaderCell>
            </Table.Row>
          </Table.Header>

          <Table.Body style={{overflowX: 'scroll'}}>
            {(this.props.tracks) ? this.props.tracks.map(track => <Song key={UUID()} track={track} selectSongs={this.props.selectSongs} />) : <tr>'No Songs Yet'</tr>}
          </Table.Body>
          </Table>
        </div>
        <div className='footer-buttons' style={{background: '#9CECFB'}}>
          {(!this.props.selectSongs) ? <Button icon labelPosition='left' size='large' style={{margin: '5px', fontFamily: 'Nunito, sans-serif'}} onClick={this.props.selectOwnSongs}><Icon name='check square outline' />Select From These Tracks</Button> :
          <Button size='large' style={{margin: '5px', fontFamily: 'Nunito, sans-serif'}} onClick={this.props.backToAllTracks}>Back To All Tracks</Button>}
          <Button secondary size='large' style={{margin: '5px', fontFamily: 'Nunito, sans-serif'}} onClick={() => this.props.fetchMoreSongRecs(this.props.weatherIcon)}>Get More Song Recommendations</Button>
          {(this.props.tracks) ? <Button icon labelPosition='left' primary size='large' style={{margin: '5px', fontFamily: 'Nunito, sans-serif'}} onClick={() => {
            this.props.createPlaylistThenResetPage(`It's ${this.props.weatherTitle} in ${this.props.weatherCity}`, ((this.props.selectedTracks.length > 0) ? this.props.selectedTracks : this.props.tracks))}}>
            <Icon name='music' />{(!this.props.selectSongs) ? 'Create A Spotify Playlist With All Songs' : 'Create A Spotify Playlist With Selected Songs'}
          </Button> : null}
          <Button color='green' size='large' style={{margin: '5px 5px 5px 60px', fontFamily: 'Nunito, sans-serif'}} onClick={() => this.props.resetPage()}>New Weather Search</Button>

        </div>
      </Fragment>
    )
  }
}

function mapStateToProps(state) {
  return {
    selectSongs: state.music.selectSongs,
    tracks: state.music.tracks,
    selectedTracks: state.music.selectedTracks,
    weatherTitle: state.weather.weatherTitle,
    weatherCity: state.weather.weatherCity,
    weatherIcon: state.weather.weatherIcon,
  }
}

export default connect(mapStateToProps, {selectOwnSongs, backToAllTracks, createPlaylistThenResetPage, fetchMoreSongRecs, resetPage })(SongList);
