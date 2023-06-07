import React from "react";
import ReactDOM from "react-dom/client.js";

const App = () => {
  return (
    <>
      <h1>React Stater Project</h1>
    </>
  );
};

console.log("this is FOR console log demo");

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
