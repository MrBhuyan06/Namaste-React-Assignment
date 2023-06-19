import React, { Fragment } from "react";
import ReactDOM from "react-dom/client.js";
import Header from "./components/Header.js";
import Body from "./components/Body.js";

//  style take a js object
// style={{
//   backgroundColor: "#f0f0f0",
// }}

// Top Level Component
const AppLayout = () => {
  return (
    <div className="app">
      <Header />
      <Body />
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<AppLayout />);
