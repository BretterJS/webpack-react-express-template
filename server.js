//  Express Server
"use strict";
const express = require("express");
const app = express();
const router = express.Router();
const path = require("path");
const url = require("url");
const http = require("http");
const port = process.env.PORT || 1337;
const exphbs = require("express-handlebars");
const bodyParser = require("body-parser");
const webpack = require("webpack");
const config = require("./webpack.config.js");
const compiler = webpack(config);

const webpackDevMiddleware = require("webpack-dev-middleware")(
  compiler,
  config.devServer
);
const webpackHotMiddleware = require("webpack-hot-middleware")(compiler);

app.use(webpackDevMiddleware);
app.use(webpackHotMiddleware);

const staticMiddleware = express.static("dist");
app.use(staticMiddleware);

app.use(express.static(path.join(__dirname, "public")));
app.use(bodyParser.json());
// app.use(bodyParser.urlEncoded({ extended: false }));

// app.engine("handlebars", exphbs({ layout: false }));
app.engine(
  "handlebars",
  exphbs({
    defaultLayout: "main",
    extname: ".handlebars",
    layoutsDir: path.join(__dirname + "/views/layouts"),
    partialsDir: path.join(__dirname + "/views/partials")
  })
);

app.set("view engine", "handlebars");

console.log(http.STATUS_CODES);
console.log("Body :", bodyParser);

// Root

app.get("/", (req, res) => {
  res.send("<h1>Express Is Running!</h1>");
  console.log("Express is Running!");
  console.log(req.bodyParser);
  console.log(req.headers);
  console.log(req.url);
  console.log(req.ip);
  console.log(req.method);
  console.log(req.protocol);
  console.log(req.path);
  console.log(req.query);
  console.log(req.subdomains);
  console.log(req.params);
  res.status(404).end();
});

////////// Routes

// Index

app.get("/index", (req, res) => {
  res.render("index", {
    title: "Index",
    style: "index.css",
    diplayHello: false, // Unless helper to display hello
    hello: "Hello",
    displayTemplate: true, // If helper to display templateEngine
    templateEngine: "Handlebars"
  });
});

// About

app.get("/about", (req, res) => {
  res.render("about", {
    title: "About",
    style: "about.css",
    templateEngine: "Handlebars"
  });
});

// Contact

app.get("/contact", (req, res) => {
  res.render("contact", {
    title: "Contact",
    style: "contact.css",
    info: {
      name: "Brett",
      email: "bretterjs@gmail.com",
      github: "https://github.com/BretterJS"
    }
  });
});

app.listen(port, err => {
  if (err) {
    console.log("There was an Error", err);
    return;
  }
  console.log(`Express Is listening on port ${port}!!!`);
});
