// index.jsx or main.jsx
// import React from "react";
import { createRoot } from "react-dom/client";
import {
  createBrowserRouter,
  Outlet,
  RouterProvider,
  useLocation,
} from "react-router";

import Header from "./components/Header";
import ToDoHome from "./screen/todo/ToDoHome";
import Home from "./screen/Home";

// Layout wrapper
const AppLayout = () => (
  <>
    <Header />
    <Outlet />
  </>
);


// Define routes
const router = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [
      {
        index: true, // This renders when path === "/"
        element: <Home />,
      },
      {
        path: "ToDo",
        element: <ToDoHome />,
      },
    ],
  },
]);

// Mount app
const root = createRoot(document.getElementById("root"));
root.render(<RouterProvider router={router} />);
