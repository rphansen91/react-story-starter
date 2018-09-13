import React from "react";
import ServerStatus from "../../components/Server";
import Navbar from "../../components/Navbar";

export default () => (
  <div>
    <Navbar />
    <div className="jumbotron">
      <div className="container">
        <h1>{process.env.APP_NAME}</h1>
      </div>
    </div>
    <div className="container">
      <ServerStatus />
    </div>
  </div>
);
