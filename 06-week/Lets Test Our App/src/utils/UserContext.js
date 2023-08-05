import { createContext } from "react";

const UserContext = createContext({
  user: {
    name: "dummy Name",
    email: "dummygmail.com",
  },
});

UserContext.displayName = "UserContext";
export default UserContext;
