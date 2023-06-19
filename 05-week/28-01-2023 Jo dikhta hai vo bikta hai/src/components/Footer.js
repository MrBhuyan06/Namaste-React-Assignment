import { useContext } from "react";
import UserContext from "../utils/UserContext.js";

const Footer = () => {
  const { user } = useContext(UserContext);
  return (
    <div>
      <h4>Footer</h4>
      <h4>{user.name}</h4>
      <h4>{user.email}</h4>
    </div>
  );
};

export default Footer;
