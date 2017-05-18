/* react dependency */
import React, { Component } from 'react';

/* react router dependency */
import {
  BrowserRouter as Router,
  Route,
} from 'react-router-dom';

/* import all-pages components */
import Header from './components/partials/Header';
import Footer from './components/partials/Footer';

/* import page components */
import Home from './components/Home';
import QuoteList from './components/QuoteList';
import SingleQuote from './components/SingleQuote';

import './App.css';

class App extends Component {
  render() {
    return (
    <Router>
      <div className="adaquotes">
        <Header />
          <main>
            <Route exact path="/" component={Home} />
            <Route exact path="/quotes" component={QuoteList} />
            <Route path="/quotes/:id" component={SingleQuote} />
          </main>
        <Footer />
      </div>
    </Router>
    );
  }
}

export default App;
