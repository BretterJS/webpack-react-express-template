import React, { Component } from "react";
const content = "React Is Running!";
require("./index.scss");
require("./App.css");
require("webpack-hot-middleware/client?reload=true");
require("./index.html");
import ClassComponent from "./classComponent";
import FunctionalComponent from "./FunctionalComponent";

function App() {
  return (
    <div className="App">
      <h1>{content}</h1>
      <ClassComponent message="This Is " />
      <FunctionalComponent message="This Is A " />
    </div>
  );
}

export default App;
