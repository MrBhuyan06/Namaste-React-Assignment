import { useRouteError } from "react-router-dom";
const ErrorElement = () => {
  //   const err = useRouteError();
  const { status, statusText, data } = useRouteError();
  //   console.log(err);
  return (
    <div>
      <h1>oops</h1>

      <p>status Error{`${status}:${statusText}`}</p>
      <p>{data}</p>
      <h2>Some think went wrong</h2>
    </div>
  );
};
export default ErrorElement;
