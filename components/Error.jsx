import { useRouteError } from "react-router-dom";

const Error = () => {
  const error = useRouteError();
  console.log(error);
  return (
    <div style={{ color: "red" }}>
      <h2>{error.data}</h2>
      <h3>Something went wrong!!!({error.status})</h3>
    </div>
  );
};

export default Error;
