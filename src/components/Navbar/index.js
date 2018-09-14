import React, { Children } from "react";
import { Link } from "react-router-dom";
import withActive from "../Active";
import BrandIcon from "./BrandIcon";
import cx from "../../utils/cx";

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
