import React, { createContext, useState } from "react";

const userDemo = createContext();
console.log(userDemo);

const statePro = ({ children }) => {
  const [users, setUser] = useState({
    name: "Abhi",
    email: "bhu",
  });
  return (
    <userDemo.Provider value={{ users, setUser }}>{children}</userDemo.Provider>
  );
};

export default statePro;
