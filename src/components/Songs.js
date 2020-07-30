import React, { Component } from 'react';
import { Consumer } from '../Context';
import Song from './Song';

class Songs extends Component {
  render() {
    return (
      <Consumer>
        {value => {
          const { songList, heading } = value;
          return (
            <>
            <h2 className="text-center  text-info">{heading}</h2>
            
            <div className="row">
              {songList.map(el => (
                <Song key={el.track.track_id} song={el.track}/>
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