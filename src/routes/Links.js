import React from "react";
import { NavLink } from "react-router-dom";

export default ({ onClick }) => [
  <NavLink onClick={onClick} className="nav-item nav-link" to="/">
    Home
  </NavLink>
];
