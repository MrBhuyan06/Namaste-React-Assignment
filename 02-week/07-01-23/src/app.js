import React from "react";
import ReactDOM from "react-dom/client";

//components Import Here
import Header from "./components/Header.js";
import Body from "./components/Body.js";

const AppLayout = () => {
  return (
    <>
      <Header />
      <Body />
    </>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<AppLayout />);
