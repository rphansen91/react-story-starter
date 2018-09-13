import React from "react";
import gql from "graphql-tag";
import { Query } from "react-apollo";
import DataLoader from "../DataLoader";

const POLL = 5000;
const statusQuery = gql`
  query ServerStatus {
    active
    ready
  }
`;

const IsActive = ({ data }) => (
  <p>
    <b>Active:</b> {String(data.active)}
  </p>
);

const IsReady = ({ data }) => (
  <p>
    <b>Ready:</b> {String(data.ready)}
  </p>
);

export const Active = () => (
  <Query pollInterval={POLL} query={statusQuery} errorPolicy="all">
    {DataLoader(IsActive)}
  </Query>
);

export const Ready = () => (
  <Query pollInterval={POLL} query={statusQuery} errorPolicy="all">
    {DataLoader(IsReady)}
  </Query>
);

export default () => [<Active key="active" />, <Ready key="ready" />];
