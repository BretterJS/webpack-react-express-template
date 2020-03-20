import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
require("./index.scss");
require("webpack-hot-middleware/client?reload=true");
require("./index.html");
const log = console.log;

log("index.js");
log("hot loading");

ReactDOM.render(<App />, document.querySelector("#root"));

if (module.hot) {
  module.hot.accept();
}
