import React from "react";
import Page from "../Page";

export default () => (
  <Page>
    <div className="bg-dark">
      <div className="jumbotron rounded-0">
        <div className="container">
          <h1>{process.env.APP_NAME}</h1>
        </div>
      </div>
      <div className="container text-white" />
    </div>
  </Page>
);
