import React, { Component } from 'react';

const Context = React.createContext();

export class Provider extends Component {
  state = {
      songList: [],
      heading: "Top Songs"
    }

  componentDidMount() {
    this.fetchSongs()
    console.log(this.state)
  }

  fetchSongs() {
    fetch(`http://localhost:8080/songs`)
    .then(res => res.json())
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