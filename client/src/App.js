import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Songs from './components/Songs';
import { Provider } from './Context';

class App extends Component {
  render() {
    return (
      <Provider>
        <BrowserRouter>
            <nav className='text-center bg-info text-white mb-5'>Lyrics for your Favorite Songs</nav>
              <Route exact path='/'>
                <Songs />
              </Route>
          </BrowserRouter>
      </Provider>
    );
  }
}

export default App;
