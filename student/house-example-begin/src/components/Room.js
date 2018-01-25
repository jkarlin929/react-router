import React, { Component } from 'react';

class Room extends Component {
  render() {
    return (
      <div>
        <p>This is a room component</p>
        <p>This is the {this.props.match.params.room}</p>
        <button onClick={() => {this.props.history.push('/')}}> Back to home </button>
      </div>
    );
  };
}

export default Room;