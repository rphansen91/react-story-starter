import React, { Component } from "react";

export default Cmp =>
  class extends Component {
    state = {
      active: false
    };

    setActive = active => {
      this.setState({ active: !!active });
    };

    toggleActive = () => {
      this.setState({ active: !this.state.active });
    };

    render() {
      return (
        <Cmp
          setActive={this.setActive}
          toggleActive={this.toggleActive}
          active={this.state.active}
        />
      );
    }
  };
