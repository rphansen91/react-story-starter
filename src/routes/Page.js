import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Links from "./Links";
import s from "./route.css";

export default ({ children, links, footer = <Footer /> }) => (
  <div className={s.page}>
    <Navbar>{links || Links}</Navbar>
    <div className={s.main}>{children}</div>
    {footer}
  </div>
);
