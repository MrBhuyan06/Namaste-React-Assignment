import React, { useState } from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import Footer from "./components/Footer";
import About from "./components/About";
import Error from "./components/Error";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import Contact from "./components/Contact";
import RestaurantMenu from "./components/RestrauntMenu";
// import Login from "./components/Login.js";
// import InstaMart from "./components/InstaMart.js";
import { lazy, Suspense } from "react";
import Shimmer from "./components/Shimmer.js";
import UserContext from "./utils/UserContext.js";
import { useContext } from "react";
// import { stateProvider } from "./context/stateProvider.js";

const Instamart = lazy(() => import("./components/InstaMart.js"));
console.log(Instamart);

const AppLayout = () => {
  const [user, setUser] = useState({
    name: "Abhihske",
    email: "Bhuyan",
  });

  // const { user } = useContext(UserContext);
  // console.log(user);

  {
  }
  return (
    <UserContext.Provider
      value={{
        user,
        setUser: setUser,
      }}
    >
      <Header />
      <Outlet />
      <Footer />
    </UserContext.Provider>
  );
  // <>
  //   <statePro initial={initialStatealue}>
  //     <Header />
  //     <Outlet />
  //     <Footer />
  //   </statePro>
  // </>
};
const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    errorElement: <Error />,
    children: [
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/",
        element: <Body />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/restaurant/:resId",
        element: <RestaurantMenu />,
      },
      {
        path: "/instamart",
        element: (
          <Suspense fallback={<Shimmer />}>
            <Instamart />
          </Suspense>
        ),
      },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<RouterProvider router={appRouter} />);
