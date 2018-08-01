import React from 'react';
import SongList from '../components/SongList';
import { connect } from 'react-redux';
import { fetchSongRecs } from '../actions';

class RecommendationsContainer extends React.Component {

  componentDidMount() {
    if (this.props.tracks.length === 0) {
      this.props.fetchSongRecs(this.props.weatherIcon)
    }
  }

  render() {
    return(
      <React.Fragment>
        {(this.props.tracks !== [])
          ? <SongList />
          : null
        }
      </React.Fragment>
    )
  }
}

function mapStateToProps(state) {
  return {
    tracks: state.music.tracks,
    weatherIcon: state.weather.weatherIcon,
  }
}

export default connect(mapStateToProps, { fetchSongRecs })(RecommendationsContainer);
