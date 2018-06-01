import { createStore } from "redux";
import reducers from "./reducers";

export default (initial, middleware) =>
  createStore(reducers, initial, middleware);
