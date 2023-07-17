import { useState } from "react";
import Logo from "../assets/img/foodvilla.png";
import { Link } from "react-router-dom";
import useOnline from "../hooks/useOnline.js";
// SPA - Single Page Application???
// Client Side Routing
import UserContext from "../utils/UserContext.js";
import { useContext } from "react";

import { useStateValue } from "../context/stateProvider.js";

const Title = () => (
  <a href="/">
    <img className="w-20" alt="logo" src={Logo} />
  </a>
);

const Header = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const offline = useOnline();
  console.log(offline);
  const { user } = useContext(UserContext);
  // const { user: users } = useStateValue();
  console.log(useStateValue());
  // console.log(users);

  return (
    <div className="flex justify-between container border mx-auto  items-center   ">
      <Title />
      <div className="nav-items">
        <ul className="flex space-x-4">
          <li>
            <Link to="/">Home</Link>
          </li>

          <Link to="/about">
            <li>About</li>
          </Link>
          <Link to="/contact">
            <li>Contact</li>
          </Link>
          <Link to="/instamart">
            <li>instamart</li>
          </Link>
          <li>Cart</li>
        </ul>
      </div>
      <span className="text-xl font-bold">{user.name}</span>
      {offline ? "✈️✈️✈️" : "offline"}
      {isLoggedIn ? (
        <button onClick={() => setIsLoggedIn(false)}>Logout</button>
      ) : (
        <button onClick={() => setIsLoggedIn(true)}>Login</button>
      )}
    </div>
  );
};

export default Header;
