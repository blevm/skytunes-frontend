import React from 'react';
import SongList from '../components/SongList';
import { connect } from 'react-redux';
import { fetchSongRecs } from '../actions';

class RecommendationsContainer extends React.Component {

  componentDidMount() {
    this.props.fetchSongRecs(this.props.currentUser, this.props.weatherIcon)
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
    currentUser: state.user.currentUser,
    weatherIcon: state.weather.weatherIcon,
  }
}

export default connect(mapStateToProps, { fetchSongRecs })(RecommendationsContainer);
