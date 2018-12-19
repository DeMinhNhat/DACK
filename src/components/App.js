import React, { Component } from "react";
import { Router, Route, Switch } from "react-router";
import { createBrowserHistory } from "history";
import indexRoutes from "../routes";

var hist = createBrowserHistory();

export default class App extends Component {
    // constructor(props) {
    //     super(props);
    //     this.state = { timer: null };
    // }

    // componentDidMount() {
    //     let timer = setInterval(this.tick, 1000);
    //     this.setState({ timer });
    // }

    // componentWillUnmount() {
    //     this.clearInterval(this.state.timer);
    // }

    // tick() {
    //     postAction.retrievePost(10);
    // }

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