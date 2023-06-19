import React, { Fragment } from "react";
import ReactDOM from "react-dom/client.js";
import Header from "./components/Header.js";
import Body from "./components/Body.js";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import About from "./components/About.js";
import Contact from "./components/Contact.js";
import ErrorElement from "./components/ErrorElement.js";
import Footer from "./components/Footer.js";
import ResTaurantMenu from "./components/RestaurantMenu.js";
//  style take a js object
// style={{
//   backgroundColor: "#f0f0f0",
// }}

// Top Level Component
const AppLayout = () => {
  return (
    <div className="app">
      <Header />
      {/* if Path is /  */}
      <Outlet />
      {/* if Path is /about  */}
      {/* <About /> */}
      {/* if Path is /contact  */}
      {/* <Contact /> */}
      <Footer />
    </div>
  );
};

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    errorElement: <ErrorElement />,
    children: [
      {
        path: "/",
        element: <Body />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/restaurant/:resId",
        element: <ResTaurantMenu />,
      },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<RouterProvider router={appRouter} />);
