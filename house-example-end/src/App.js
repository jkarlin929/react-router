/* importing dependencies */
import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';

/* importing components */
import Index from './components/Index';
import House from './components/House';
import Room from './components/Room';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="app">
          <nav>
            <ul>
              <li><Link to="/">Index</Link></li>
              <li><Link to="/house">House</Link></li>
              <li><Link to="/house/kitchen">Kitchen</Link></li>
              <li><Link to="/house/porch">Porch</Link></li>
            </ul>
          </nav>
          <main>
            <Route exact path="/" component={Index} />
            <Route exact path="/house" component={House} />
            <Route path="/house/:room" component={Room} />
          </main>
        </div>
      </Router>
    );
  }
}

export default App;
