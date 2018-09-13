import React from "react";
import Links from "../Links";
import ServerStatus from "../../components/Server";
import Navbar from "../../components/Navbar";

export default () => (
  <div>
    <Navbar>{Links}</Navbar>
    <div className="jumbotron rounded-0">
      <div className="container">
        <h1>{process.env.APP_NAME}</h1>
      </div>
    </div>
    <div className="container text-white">
      <ServerStatus />
    </div>
  </div>
);
