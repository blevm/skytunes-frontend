import React from 'react';

const Song = (props) => {
  return (
    <tr key={props.track.id}>
    <audio src={props.track.preview_url} controls="play">
      Your browser does not support the audio element.
    </audio>
    <td>{props.track.name}</td>
    <td>{props.track.artists[0].name}</td>
    </tr>
  )
}

export default Song;
