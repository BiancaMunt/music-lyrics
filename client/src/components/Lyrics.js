import React, { Component } from 'react';
import { Consumer } from '../Context';

class Lyrics extends Component {
    
    render() {
        return (
        <Consumer>
        {value => {
          const {lyrics} = value;
          return (
            <>
            <div className="row">
              
            </div>
            </>
          )
        }}
      </Consumer>
        );
    }
}

export default Lyrics;