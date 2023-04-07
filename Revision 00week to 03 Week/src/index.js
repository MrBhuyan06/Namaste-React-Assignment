import React from "react";
import ReactDOM from "react-dom/client.js";
import Header from "./components/Header.js";
import AppLayout from "./App.js";
import Main from "./components/Main.js";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import About from "./components/About.js";
import Contact from "./components/Contact.js";
import Error from "./components/Error.js";
import RestuarentMenu from "./components/RestuarentMenu.js";

// const h1 = <h1>Hello </h1>;

const appRoutes = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    errorElement: <Error />,
    children: [
      {
        path: "/",
        element: <Main />,
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
        path: "/restuarent/:id",
        element: <RestuarentMenu />,
      },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRoutes} />);
