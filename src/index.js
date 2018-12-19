import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App";
import { Provider } from "react-redux";
import configureStore from "./configureStore";
// import throttle from 'lodash/throttle';

import "./utils/index.css";

const store = configureStore();

// store.subscribe(throttle(() => { console.log('testing now baby') }, 1000));

ReactDOM.render(
    <Provider store={store}>
    <App />
  </Provider>,
    document.getElementById("root")
);