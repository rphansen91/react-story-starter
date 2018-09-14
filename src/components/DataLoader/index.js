import React from "react";

const _LoadingCmp = ({ loading }) => <p>Loading ...</p>;

const _ErrorCmp = ({ error }) => <p>Error: {error.message}</p>;

const _DataCmp = ({ data }) => <pre>{JSON.stringify(data, null, 2)}</pre>;

export default ({
  LoadingCmp = _LoadingCmp,
  ErrorCmp = _ErrorCmp,
  DataCmp = _DataCmp
}) => ({ loading, error, data }) => {
  if (loading) return <LoadingCmp loading={loading} />;
  if (error) return <ErrorCmp error={error} />;
  return <DataCmp data={data} />;
};
