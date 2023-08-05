import React, { useState } from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import Footer from "./components/Footer";
import About from "./components/About";
import Error from "./components/Error";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import Contact from "./components/Contact";
import ResTaurantMenu from "./components/RestaurantMenu.js";
// import Login from "./components/Login.js";
// import InstaMart from "./components/InstaMart.js";
import { lazy, Suspense } from "react";
import Shimmer from "./components/Shimmer.js";
import UserContext from "./utils/UserContext.js";
import { useContext } from "react";
import { Provider } from "react-redux";
import store from "./utils/store.js";
import Cart from "./components/Cart.js";
// import DemoContext from "./utils/DemoContext.js";
// import CartContext from "./utils/CartContext.js";
const Instamart = lazy(() => import("./components/InstaMart.js"));
console.log(Instamart);

const AppLayout = () => {
  const [user, setUser] = useState({
    name: "Abhishek Bhuyan",
    email: "guduguru@gmail.com",
  });
  // const { user } = useContext(UserContext);
  // console.log(user);
  return (
    <>
      <Provider store={store}>
        <UserContext.Provider
          value={{
            user: user,
            setUser: setUser,
          }}
        >
          <Header />
          <Outlet />
          <Footer />
        </UserContext.Provider>
      </Provider>
    </>
  );
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
        element: <ResTaurantMenu />,
      },
      {
        path: "/cart",
        element: <Cart />,
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
