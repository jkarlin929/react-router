import React, { Component } from 'react';

class Room extends Component {
  render() {
    return (
      <div>
        <p>This is the {this.props.match.params.room}.</p>
      </div>
    );
  };
}

export default Room;
