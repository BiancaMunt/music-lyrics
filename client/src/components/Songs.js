import React, { Component } from 'react';
import { Consumer } from '../Context';
import Song from './Song';

class Songs extends Component {
  render() {
    return (
      <Consumer>
        {value => {
          console.log(value)
          const { songList, heading } = value;
          return (
            <>
            <h2 className="text-center  text-info">{heading}</h2>
            <div className="row">
              {songList.map(el => (
                <Song key={el.track_id} song={el.track} lyrics={el.lyrics} artist={el.artist} id={el.track_id}/>
              ))}
            </div>
            </>
          )
        }}
      </Consumer>
    );
  }
}

export default Songs;