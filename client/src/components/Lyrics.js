import React, { Component } from 'react';

class Lyrics extends Component {
    state = {
        lyrics: []
    }
    componentDidMount() {
        this.fetchLyrics()
        console.log(this.state)
    }

    fetchLyrics() {
    fetch(`http://localhost:8080/lyrics`)
    .then(res => res.json())
    .then(data => this.setState({lyrics: data[0]}))
    .catch(err => console.log(err))
    }

    render() {
        const { lyrics } = this.state
        return (
            <div>
               Lyrics
            </div>
        );
    }
}

export default Lyrics;