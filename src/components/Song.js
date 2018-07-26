import React from 'react';
import { Table, Icon, Checkbox } from 'semantic-ui-react';
import { connect } from 'react-redux';
import { addTrack, removeTrack } from '../actions';


class Song extends React.Component {
  state = {
    playing: false,
    checked: false
  }

  playAudio = (id) => {
     var audio = document.getElementById(id);
     audio.paused ? audio.play() : audio.pause();
     this.setState({
       playing: !this.state.playing
     })
  }

  handleCheck = (data) => {
    this.setState({
      checked: !this.state.checked
    }, () => {
      (this.state.checked) ? this.props.addTrack(data) : this.props.removeTrack(data)
    })

  }

  render() {
    return (
      <Table.Row>
        <Table.Cell floated='right' style={(this.props.selectSongs) ? {} : {display: "none"}}>
          <Checkbox floated='right' checked={this.state.checked} onChange={() => this.handleCheck(this.props.track)}/>
        </Table.Cell>
        <Table.Cell>{this.props.track.name}</Table.Cell>
        <Table.Cell>{this.props.track.artists[0].name}</Table.Cell>
          <Table.Cell>
            <Icon size='large' link name={(this.state.playing) ? 'pause circle outline' : 'play circle outline'} onClick={() => this.playAudio(this.props.track.id)}/>
            <audio
              id={this.props.track.id}
              src={this.props.track.preview_url}
              preload="auto">
              Your browser does not support the audio element.
            </audio>
          </Table.Cell>
      </Table.Row>
    )
  }
}

function mapStateToProps(state) {
  return {
    selectSongs: state.music.selectSongs
  }
}

function mapDispatchToProps(dispatch) {
  return {
    addTrack: data => dispatch(addTrack(data)),
    removeTrack:  data => dispatch(removeTrack(data))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Song);
