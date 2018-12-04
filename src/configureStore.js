import { createStore, applyMiddleware } from "redux";
import { createLogger } from "redux-logger";
import thunk from "redux-thunk";
import rootReducer from "./reducers";

const loggerMiddleware = createLogger();
const reduxMiddlewares = [thunk, loggerMiddleware];

const configureStore = () => {
  const store = createStore(
    rootReducer,
    // persistedState,
    applyMiddleware.apply(undefined, reduxMiddlewares)
  );

  return store;
};

export default configureStore;
