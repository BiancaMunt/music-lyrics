import React, { Component } from 'react';

const Context = React.createContext();

export class Provider extends Component {
  state = {
      songList: [],
      heading: "Top Songs"
    }

  componentDidMount() {
    this.fetchSongs()
  }

  fetchSongs() {
    fetch(`https://cors-anywhere.herokuapp.com/https://api.musixmatch.com/ws/1.1/chart.tracks.get?chart_name=top&page=1&page_size=10&country=ne&f_has_lyrics=1&apikey=${process.env.REACT_APP_KEY}`)
    .then(res => res.json())
    .then(data => data.message.body.track_list)
    .then(data => this.setState({songList: data}))
    .catch(err => console.log(err))
  }

  render () {
      return (
        <Context.Provider value={this.state}>
          {this.props.children}
        </Context.Provider>
      )
  }
}

export const Consumer = Context.Consumer;