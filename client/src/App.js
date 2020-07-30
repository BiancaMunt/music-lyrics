import React, { Component } from 'react';
import './App.css';

import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Songs from './components/Songs';
import { Provider } from './Context';
import Lyrics from './components/Lyrics';


class App extends Component {
  render() {
    return (
      <Provider>
        <BrowserRouter>
            <nav className='text-center bg-info text-white'>Lyrics for your Favorite Songs</nav>
            <Switch>
            <Route exact path='/:id'>
                <Lyrics />
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
