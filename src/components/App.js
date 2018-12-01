import React, { Component } from 'react';
import { Router, Route, Switch } from 'react-router';
import { createBrowserHistory } from 'history';

import indexRoutes from '../routes/index';

var hist = createBrowserHistory();

class App extends Component {
  render() {
    return (<div>
      <Router history={hist}>
        <Switch>
          {indexRoutes.map((prop, key) => {
            return <Route path={prop.path} key={key} component={prop.components} />
          })}
        </Switch>
      </Router>
    </div>
    );
  }
}

export default App;
