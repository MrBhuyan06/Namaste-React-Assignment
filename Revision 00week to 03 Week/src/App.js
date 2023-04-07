import Footer from "./components/Footer.js";
import Header from "./components/Header.js";
import Main from "./components/Main.js";
import { Outlet } from "react-router-dom";
const AppLayout = () => {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
};
export default AppLayout;
