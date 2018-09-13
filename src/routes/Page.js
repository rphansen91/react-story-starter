import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Links from "./Links";
import s from "./route.css";

export default ({ children, links }) => (
  <div className={s.page}>
    <Navbar>{links || Links}</Navbar>
    <div className={s.main}>{children}</div>
    <Footer />
  </div>
);
