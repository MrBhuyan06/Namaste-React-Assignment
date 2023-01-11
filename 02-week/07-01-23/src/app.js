import React from "react";
import ReactDOM from "react-dom/client";

//components Import Here
import Header from "./components/Header.js";

const test = <h1>Hello World</h1>;
console.log(test);

const AppLayout = () => {
  return <Header />;
};

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<AppLayout />);
