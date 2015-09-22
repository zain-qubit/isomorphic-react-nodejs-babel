/**
 * Created by zain on 8/17/15.
 */

import "babel/polyfill"; // to support Safari and legacy browsers (http://babeljs.io/docs/usage/polyfill/)
import { Route, Link, RouteHandler } from "react-router";
import React from "react";

export default class AppHandler extends React.Component {
  render() {
    return (
      <div>
        <header>
          <div>
            <p>isomorphic-react-nodejs-babel</p>
            <ul>
              <li>
                <Link id="help" to="help">Help</Link>
              </li>
              <li>
                <Link id="main" to="main">Main</Link>
              </li>
            </ul>
          </div>
        </header>
        {/* this is the important part */}
        <div>
          <RouteHandler/>
        </div>
      </div>
    );
  }
}
