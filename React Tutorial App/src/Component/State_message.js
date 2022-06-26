import React, { Component } from "react";

class State_message extends Component {
  constructor() {
    super();

    this.state = {
      message: "Hello You are inside message",
    };
  }
  subscribe() {
    this.setState({
      message: "You have subscribed our channel",
    });
  }
  render() {
    return (
      <div>
        <h1>{this.state.message}</h1>
        <button onClick={() => this.subscribe()}>Subscribe</button>
      </div>
    );
  }
}

export default State_message;
