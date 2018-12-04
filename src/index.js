import React from "react";
// import firebase from "firebase";
// import { firebaseConfig } from "./config";
import ReactDOM from "react-dom";
import App from "./components/App";
import { Provider } from "react-redux";
import configureStore from "./configureStore";

import "./utils/index.css";

// firebase.initializeApp(firebaseConfig);

const store = configureStore();

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
