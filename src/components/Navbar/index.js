import React, { Children } from "react";
import { Link } from "react-router-dom";
import withActive from "../Active";
import cx from "../../utils/cx";

const BrandIcon = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 612 612" {...props}>
    <path
      fill="#563D7C"
      d="M612 510c0 56.1-45.9 102-102 102H102C45.9 612 0 566.1 0 510V102C0 45.9 45.9 0 102 0h408c56.1 0 102 45.9 102 102v408z"
    />
    <text fill="#fff" x="200" y="400" style={{ font: "bold 300px sans-serif" }}>
      {(process.env.APP_NAME || "A").charAt(0)}
    </text>
  </svg>
);

export default withActive(({ active, setActive, toggleActive, children }) => (
  <nav className="navbar navbar-expand-lg navbar-dark bg-dark w-100">
    <Link className="navbar-brand" to="/">
      <BrandIcon
        src=""
        width="30"
        height="30"
        className="d-inline-block align-top mr-1"
        alt=""
      />
      {/* {process.env.APP_NAME} */}
    </Link>
    <button
      className="navbar-toggler"
      onClick={toggleActive}
      type="button"
      data-toggle="collapse"
      data-target="#navbarNavAltMarkup"
      aria-controls="navbarNavAltMarkup"
      aria-expanded="false"
      aria-label="Toggle navigation"
    >
      <span className="navbar-toggler-icon" />
    </button>
    <div
      className={cx({
        collapse: true,
        "navbar-collapse": true,
        show: active
      })}
      id="navbarNavAltMarkup"
    >
      <div className="navbar-nav ml-auto">
        {children({ onClick: () => setActive(false) })}
      </div>
    </div>
  </nav>
));
