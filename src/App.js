import React, { Component } from 'react';
import './App.css';

import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Song from './components/Song';
import Songs from './components/Songs';
import { Provider } from './Context';


class App extends Component {
  render() {
    return (
      <Provider>
        <BrowserRouter>
            <nav>Get the Lyrics for your Favorite Songs</nav>
            <Switch>
              <Route exact path='/about'>
                <Song />
              </Route>
              <Route exact path='/'>
                <Songs />
              </Route>
            </Switch>
          </BrowserRouter>
      </Provider>
    );
  }
}

export default App;
