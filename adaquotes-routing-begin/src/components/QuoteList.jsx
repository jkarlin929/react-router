import React, { Component } from 'react';
import Quote from './Quote';

class QuoteList extends Component {
  render() {
    return (
      <div className="quotelist">
        {this.props.apiData.map((quote) => {
          return <Quote quote={quote} setFeature={this.props.setFeature} featuredQuoteId={this.props.featuredQuoteId} key={quote.id} />
        })}
      </div>
    )
  }
}

export default QuoteList;