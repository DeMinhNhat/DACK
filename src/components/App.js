import React, { Component } from "react";
import { Router, Route, Switch } from "react-router";
import { createBrowserHistory } from "history";

import indexRoutes from "../routes";

var hist = createBrowserHistory();

export default class App extends Component {
  render() {
    return (
      <Router history={hist}>
        <Switch>
          {indexRoutes.map((prop, key) => {
            return (
              <Route path={prop.path} key={key} component={prop.components} />
            );
          })}
        </Switch>
      </Router>
    );
  }
}
