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

const ActiveIcon = ({ active }) =>
  active ? (
    <i className="fas fa-check text-success" />
  ) : (
    <i className="fas fa-times text-danger" />
  );

const IsActive = ({ data }) => (
  <p className="mb-0">
    <ActiveIcon active={data.active} /> <b>Active</b>
  </p>
);

const IsReady = ({ data }) => (
  <p className="mb-0">
    <ActiveIcon active={data.ready} /> <b>Ready</b>
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

export default () => (
  <div>
    <h2>Server Status</h2>
    <Active key="active" />
    <Ready key="ready" />
  </div>
);
