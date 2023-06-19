import { createContext } from "react";

const UserContext = createContext({
  user: {
    name: "dummy Name",
    email: "dummygmail.com",
  },
});

export default UserContext;
