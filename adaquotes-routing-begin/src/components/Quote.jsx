import React, { Component } from 'react';

class Quote extends Component {
  render() {
    return (
      <div className={
        (this.props.featuredQuoteId === this.props.quote.id) 
          ? "my-quote featured" 
          : "my-quote"
        }>
        <div className="featureme"><i onClick={() => this.props.setFeature(this.props.quote.id)} className="fa fa-star fa-2x"></i></div>
        <h3>{this.props.quote.content}</h3>
        <div className="meta">
          <span className="author">{this.props.quote.author}</span>
          <span className="genre">{this.props.quote.genre_type}</span>
        </div>
      </div>
    )
  }
}

export default Quote;