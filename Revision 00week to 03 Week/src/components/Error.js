//useRouteError
import { useRouteError } from "react-router-dom";

const Error = () => {
  const { status, statusText } = useRouteError();
  //   console.log(error);
  console.log(status, statusText, "hello");
  return (
    <div>
      <h2>Error page</h2>
      <p>oops !! </p>
      <h3>{status}</h3>
      <h3></h3>
      <h3>{statusText}</h3>
    </div>
  );
};
export default Error;
