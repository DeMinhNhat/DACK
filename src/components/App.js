import axios from "axios";
import React, { Component } from "react";
import { Router, Route, Switch } from "react-router";
import { createBrowserHistory } from "history";
import indexRoutes from "../routes";

var hist = createBrowserHistory();

export default class App extends Component {
    state = {
        counter: 0,
        timer: null,
    };

    componentDidMount() {
        let timer = setInterval(this.tick, 1000);
        this.setState({ timer });
    }

    componentWillUnmount() {
        this.clearInterval(this.state.timer);
    }

    tick() {
        let req = "https://komodo.forest.network/block_results?height=2";
        axios.get(req)
            .then((res) => {
                console.log(res);
            })
            .catch((err) => {
                console.log(err);
            });
    }

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