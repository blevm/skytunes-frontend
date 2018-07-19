import React from 'react';
import SongList from '../components/SongList';

class RecommendationsContainer extends React.Component {
  constructor() {
    super()

    this.state = {
      tracks: []
    }
  }

  componentDidMount() {
    fetch(`http://localhost:4000/api/v1/${this.props.currentUser}/${this.props.weatherIcon}/recommended-tracks`)
    .then(resp => resp.json())
    .then(data => this.setState({
      tracks: data.tracks
    }, () => console.log(this.state)))
  }

  render() {
    return(
      <React.Fragment>
      {(this.state.tracks !== []) ? <SongList tracks={this.state.tracks}/> : null}
      </React.Fragment>
    )
  }

}

export default RecommendationsContainer;
