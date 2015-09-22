/**
 * Created by zain on 8/17/15.
 */
import express from "express";
import bodyParser from "body-parser";
import React from "react";
import Router from "react-router";
import config from "../../config/config";
import routes from "../shared/routes";

const app = express();

// set up Jade
app.set("views", "./views");
app.set("view engine", "jade");

// set up request body parsing
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

// set up static assets
app.use(express.static("./public"));

// React router entry point
app.get("/*", function (req, res) {
  Router.run(routes, req.url, Handler => {
    let content = React.renderToString(<Handler />);
    res.render("index", {content: content, webpackPort: config.webpack.port});
  });
});

var server = app.listen(config.express.port, function () {
  let host = server.address().address;
  let port = server.address().port;
  console.log("App listening at http://%s:%s", host, port);
});
