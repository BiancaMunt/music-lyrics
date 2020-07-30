import React, { Component } from 'react';
import './App.css';

import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Songs from './components/Songs';
import { Provider } from './Context';

class App extends Component {
  render() {
    return (
      <Provider>
        <BrowserRouter>
            <nav className='text-center bg-info text-white'>Lyrics for your Favorite Songs</nav>
            <Switch>
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
