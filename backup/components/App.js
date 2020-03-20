import React, { Component } from "react";

const content = "React Is Running!";

class App extends Component {
  render() {
    return (
      <div>
        <h1 className="header1">{content}</h1>
      </div>
    );
  }
}

export default App;
