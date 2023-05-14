import React from "react";
import logo from "./logo.png";
import { FaUserCircle } from "react-icons/fa";
import "./header.css";

export const Header = () => {
  console.log("HEllo am in the console");
  return (
    <header className="">
      <div className="container header__container">
        <img src={logo} alt="logo is loading" />

        <div>
          <form action="">
            <input type="text" placeholder="search here" />
            <button>Search</button>
          </form>
        </div>

        <div className="avtar">
          <FaUserCircle style={{ color: "blue" }} className="avtor" />
        </div>
      </div>
    </header>
  );
};
