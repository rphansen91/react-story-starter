import React from "react";
import ReactDOM from "react-dom";
import ApolloClient from "apollo-boost";
import { ApolloProvider } from "react-apollo";
import { BrowserRouter as Router, withRouter } from "react-router-dom";
import { applyMiddleware, compose } from "redux";
import { Provider } from "react-redux";
import saga from "redux-saga";
import thunk from "redux-thunk";
import logger from "redux-logger";
import createStore from "./store";
import bootStore from "./store/boot";
import clientState from "./store/graphql";
import App from "./App";

const sagaMiddleware = saga();
const preloadedState = window.__PRELOADED_STATE__;
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const middlewares = [thunk, logger, sagaMiddleware].filter(v => !!v);
const middleware = composeEnhancers(applyMiddleware(...middlewares));
const store = createStore(preloadedState, middleware);
const client = new ApolloClient({
  uri: process.env.REACT_APP_GRAPHQL_SERVICE_URI,
  clientState
});
const context = {};

bootStore(store, sagaMiddleware);

ReactDOM.render(
  <Router basename={process.env.REACT_APP_BASE_NAME || ""} context={context}>
    <ApolloProvider client={client}>
      <Provider store={store}>
        <App />
      </Provider>
    </ApolloProvider>
  </Router>,
  document.getElementById("root")
);
