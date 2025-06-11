// index.jsx or main.jsx
import { createRoot } from "react-dom/client";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router";

import Header from "./components/Header";
import ToDoHome from "./screen/todo/ToDoHome";
import Home from "./screen/Home";
// Import your other components
// import App1 from "./screen/App1";
// import App2 from "./screen/App2";
// import Portfolio from "./screen/Portfolio";

const AppLayout = () => (
  <>
    <Header />
    <Outlet />
  </>
);

const router = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "todo",
        element: <ToDoHome />,
      },
      // {
      //   path: "app1",
      //   element: <App1 />,
      // },
      // {
      //   path: "app2",
      //   element: <App2 />,
      // },
      // {
      //   path: "portfolio",
      //   element: <Portfolio />,
      // },
    ],
  },
]);

const root = createRoot(document.getElementById("root"));
root.render(<RouterProvider router={router} />);
