import Image from "../../images.png";

const Header = () => {
  return (
    <div className="nav">
      <a href="/">
        <img src={Image} alt="image" />
      </a>
      <div className="nav-lists">
        <ul>
          <li>Home</li>
          <li>About</li>
          <li>Contact us</li>
          <li>Cart</li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
