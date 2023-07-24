import { createContext } from "react";

const UserContext = createContext([
  {
    name: "dummy Name",
    email: "dummygmail.com",
  },
]);

export default UserContext;
