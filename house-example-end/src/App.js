/* importing dependencies */
import React, { Component } from 'react';
import { Route, Redirect, Switch } from 'react-router-dom';

/* importing components */
import Header from './components/Header';
import Home from './components/Home';
import House from './components/House';
import Room from './components/Room';

class App extends Component {
  render() {
    return (
        <div className="app">
          <Header />
          <main>
            <Switch>
              <Route path="/" component={Home} />
              <Route path="/house" component={House} />
              <Route path="/house/:room" component={Room} />
              <Redirect to="/" />
            </Switch>
          </main>
        </div>
    );
  }
}

export default App;
