import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Home from './components/Home';
import House from './components/House';
import Room from './components/Room';
import Header from './components/Header';
import {Route, Redirect, Switch} from 'react-router-dom';


class App extends Component {
  render() {
    return (
      <div className="app">
        <Header />
        <main>
          <Switch>
            
            <Route path='/house/:room' component={Room} />
            <Route path='/house' component={House} />
            <Route path='/house/kitchen' component={House} />
            <Route path='/' component={Home} />
            <Redirect to='/' />
         </Switch>
        </main>
      </div>
    );
  }
}

export default App;
