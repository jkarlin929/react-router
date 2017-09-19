import React, { Component } from 'react';
import './App.css';

import {Route, Switch, Redirect} from 'react-router-dom';

import Header from './components/partials/Header';
import Footer from './components/partials/Footer';
import Home from './components/Home';
import QuoteList from './components/QuoteList';
import SingleQuote from './components/SingleQuote';
import About from './components/About';

class App extends Component {
  render() {
    return (
      <div className="uotes">
        <Header />
          <main>
            <Switch>
              <Route path="/quotes/:id" component={SingleQuote} />
              <Route path="/quotes" component={QuoteList} />
              <Route path="/about" component={About} />
              <Route exact path="/" component={Home} />
              <Redirect to="/" />
            </Switch>
          </main>
        <Home />
        <Footer />
      </div>
    );
  }
}

export default App;
