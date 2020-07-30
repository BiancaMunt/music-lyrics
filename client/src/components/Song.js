import React from 'react';
import { Link } from 'react-router-dom';


function Song(props) {
  const { song, artist, id } = props;
    return (
      <div className="col-md-6">
        <div className="card mb-4 shadow-sm">
          <div className="card-body">
          <h5>{song}</h5>
          <p>by</p>
          <h6><i>{artist}</i></h6>
          <Link to={`/${id}`}
          className="btn btn-info">
            <i>View Lyrics</i>
          </Link>
          </div>
        </div> 
      </div>
    );
}

export default Song;