import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, withRouter } from "react-router-dom";
import { applyMiddleware, compose } from "redux";
import { Provider } from "react-redux";
import saga from "redux-saga";
import thunk from "redux-thunk";
import logger from "redux-logger";
import createStore from "./store";
import bootStore from "./store/boot";
import App from "./App";

const sagaMiddleware = saga()
const preloadedState = window.__PRELOADED_STATE__;
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const middlewares = [thunk, logger, sagaMiddleware].filter(v => !!v)
const middleware = composeEnhancers(applyMiddleware(...middlewares));
const store = createStore(preloadedState, middleware);
const context = {};

bootStore(store, sagaMiddleware);

ReactDOM.render(
  <Router basename={process.env.REACT_APP_BASE_NAME || ""} context={context}>
    <Provider store={store}>
      <App />
    </Provider>
  </Router>,
  document.getElementById("root")
);
