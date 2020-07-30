import React, { Component } from 'react';
import { Consumer } from '../Context';

class Songs extends Component {
  render() {
    return (
      <Consumer>
        {value => {
          console.log(value);
          return <h1>All Songs</h1>
        }}
      </Consumer>
    );
  }
}

export default Songs;