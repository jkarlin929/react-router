import React, { Component } from 'react';
import QuoteList from './components/QuoteList';
import Footer from './components/Footer';
import Header from './components/Header';
import './index.css';
import './App.css';


class App extends Component {
  constructor() {
    super();
    this.state = {
      apiData: null,
      apiDataLoaded: false,
      featuredQuoteId: null,
    }
  
  this.setFeature = this.setFeature.bind(this);
  }

  componentDidMount() {
    fetch('https://ada-api.herokuapp.com/api/quotes')
      .then((res) => {
        return res.json();
      }).then((jsonRes) => {
        this.setState({
          apiData: jsonRes.quotesData,
          apiDataLoaded: true,
        })
      })
  }

  renderQuoteList() {
    if (this.state.apiDataLoaded) {
      return <QuoteList apiData={this.state.apiData} setFeature={this.setFeature} featuredQuote={this.state.featuredQuoteId} />
    } else return <p>Loading</p>;
  }

  setFeature(id) {
    console.log('featured' + id);
    this.setState({
      featuredQuoteId: id,
    })
  }

  render() {
    console.log('render');
    return (
      <div className="App">
        <Header />
        <main>
          {this.renderQuoteList()}
        </main>
        <Footer />
      </div>
    );
  }
}

export default App;