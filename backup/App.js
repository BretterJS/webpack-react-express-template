import React from "react";
const content = "React Is Running!";
require("./index.scss");
require("./App.css");
require("webpack-hot-middleware/client?reload=true");
require("./index.html");

function App() {
  return (
    <div className="App">
      <h1>{content}</h1>
    </div>
  );
}

export default App;
