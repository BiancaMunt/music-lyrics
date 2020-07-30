import React, {Component} from 'react';
import { Link } from 'react-router-dom';


class Song extends Component {
  constructor(props) {
    super(props)
    this.state = {
      isVisible: true
    }
  }
  
  showLyrics = () => {
    console.log(this.state.isVisible)
    this.setState(({isVisible: !this.state.isVisible}))
  }
  render() {
    const { song, artist, id, lyrics} = this.props;
    return (
      <div className="col-md-6">
        <div className="card mb-4 shadow-sm">
          <div className="card-body">
          <h5>{song}</h5>
          {this.state.isVisible ? <>
            <p>by</p>
            <h6><i>{artist}</i></h6>
          </> :
          <div className="mb-4">{lyrics}</div>}
          <button className="btn btn-info" onClick={this.showLyrics}><i>View Lyrics</i></button>
          </div>
        </div> 
      </div>
    );
  }
}

export default Song;