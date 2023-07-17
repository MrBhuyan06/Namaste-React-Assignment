import { Children, createContext, useContext, useState } from "react";

const User = createContext();
console.log(User);

export const stateProvider = ({ children }) => {
  const [user, setUser] = useState({
    name: "abhishek",
    email: "Abhi@gmail.com",
  });

  return <User.Provider value={(user, setUser)}>{children}</User.Provider>;
};

export const useStateValue = () => useContext(User);
