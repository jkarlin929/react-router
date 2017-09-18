import React, { Component } from 'react';

class Room extends Component {
  constructor(props) {
    super(props)
    this.cl = this.cl.bind(this);
  }
  cl() {
    console.log(this.props)
  }
  render() {
    return (
      <div>
        <p>This is the {this.props.match.params.room} {this.cl()}</p>
      </div>
    );
  };
}

export default Room;
