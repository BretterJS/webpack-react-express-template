import React, { Component } from "react";
import "./App.css";
const content = "React Is Running!";

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>{content}</h1>
      </div>
    );
  }
}

export default App;
