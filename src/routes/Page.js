import React, { cloneElement } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Links from "./Links";
import s from "./route.css";
import cx from "../utils/cx";

export default ({ children, links, footer = <Footer /> }) => (
  <div className={s.page}>
    <Navbar>{links || Links}</Navbar>
    {cloneElement(children, {
      ...children.props,
      className: cx([children.props.className, s.main])
    })}
    {footer}
  </div>
);
