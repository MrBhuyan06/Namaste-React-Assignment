import Image from "../../images.png";

const Header = () => {
  return (
    <div className="nav">
      <a href="/">
        <img src={Image} alt="image" />
      </a>
      <div className="nav-lists">
        <ul>
          <li key={1}>Home</li>
          <li key={2}>About</li>
          <li key={3}>Contact us</li>
          <li key={4}>Cart</li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
