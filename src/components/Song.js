import React from 'react';


function Song(props) {
  const { song } = props;
    return (
      <div className="col-md-6">
        <div className="card mb-4 shadow-sm">
          <div className="card-body">
          <h5>{song.artist_name}</h5>
          </div>
        </div> 
      </div>
    );
}

export default Song;