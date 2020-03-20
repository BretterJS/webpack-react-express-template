import React, { Component } from "react";

class ClassComponent extends Component {
  constructor() {
    super();
    this.state = {
      message: "A"
    };
  }
  newMessage() {
    this.setState({
      message: "Class components state has changed"
    });
  }
  render() {
    return (
      <div>
        <h2 className="primary">
          {this.props.message}
          {this.state.message} Class Component
        </h2>
        <button onClick={() => this.newMessage()}>Click</button>
      </div>
    );
  }
}

export default ClassComponent;
