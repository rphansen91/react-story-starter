import React from "react";

export default Cmp => ({ loading, error, data }) => {
  if (loading) return <p>Loading ...</p>;
  if (error) {
    console.log(Object.keys(error));
    console.log(error.graphQLErrors);
    console.log(error.networkError);
    return <p>Error: {error.message}</p>;
  }
  return <Cmp data={data} />;
};
