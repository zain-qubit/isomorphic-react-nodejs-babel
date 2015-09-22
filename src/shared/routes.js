/**
 * Created by zain on 8/17/15.
 */
import { Route, DefaultRoute } from "react-router";
import React from "react";

import AppHandler from "./components/AppHandler";
import Main from "./components/Main";
import Help from "./components/Help";

export default (
  <Route name="main" path="/" handler={ AppHandler }>
    <Route name="help" handler={ Help }/>
    <DefaultRoute handler={ Main }/>
  </Route>
);
