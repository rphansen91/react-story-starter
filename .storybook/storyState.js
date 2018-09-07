import React, { Component } from "react";

export default (WrappedComponent, initial, setters) =>
  class extends Component {
    constructor(props) {
      super(props);
      this.state = initial;
      this.setters = Object.keys(setters)
        .filter(key => typeof setters[key] === "function")
        .reduce((acc, key) => {
          acc[key] = (...args) => {
            return this.setState(setters[key](...args));
          };
          return acc;
        }, {});
    }
    render() {
      return (
        <WrappedComponent {...this.props} {...this.state} {...this.setters} />
      );
    }
  };
