import { useState } from "react";
import Logo from "../assets/img/foodvilla.png";
import { Link } from "react-router-dom";
import useOnline from "../hooks/useOnline.js";
// SPA - Single Page Application???
// Client Side Routing
import UserContext from "../utils/UserContext.js";
import { useContext } from "react";
import { useSelector } from "react-redux";
import store from "../utils/store.js";
import DemoContext from "../utils/DemoContext.js";

const Title = () => (
  <a href="/">
    <img data-testid="image" className="w-20" alt="logo" src={Logo} />
  </a>
);

const Header = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const offline = useOnline();
  console.log(offline);
  const { user } = useContext(UserContext);
  const cart = useSelector((store) => store.cart.items);
  const { demo } = useContext(DemoContext);
  return (
    <div className="flex justify-between container border mx-auto  items-center   ">
      <Title />
      <button>ADD Items</button>
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

          <Link to="/cart">
            <li data-testid="cart">Cart-{cart.length} -Store</li>
          </Link>
        </ul>
      </div>
      <span className="text-xl font-bold">{user.name}</span>
      <span className="text-xl font-bold">{demo}</span>
      <span data-testid="online">{offline ? "✅" : "offline"}</span>
      {isLoggedIn ? (
        <button onClick={() => setIsLoggedIn(false)}>Logout</button>
      ) : (
        <button onClick={() => setIsLoggedIn(true)}>Login</button>
      )}
    </div>
  );
};

export default Header;
