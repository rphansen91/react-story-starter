import React from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import Home from "./routes/Home";
import s from "./index.css";

export default () => (
  <Switch>
    <Route exact path="/" component={Home} />
    <Redirect to="/" />
  </Switch>
);
