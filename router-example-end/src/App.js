/* importing dependencies */
import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';

/* importing components */
import Index from './components/Index';

class App extends Component {
  render() {
    return (
      <Router>
        <main>
          <Route path="/" component={Index} />
        </main>
      </Router>
    );
  }
}

export default App;
