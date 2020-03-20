import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App";
import "./style.scss";
const log = console.log;

log("index.js");
log("hot loading");

ReactDOM.render(<App />, document.querySelector("#root"));

if (module.hot) {
  module.hot.accept();
}
