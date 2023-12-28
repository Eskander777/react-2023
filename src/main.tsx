import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import { routes } from "./utils/routes";

import Index from "./routes/Index";
import Root from "./routes/Root";
import First from "./routes/First";
import Second from "./routes/Second";
import ErrorPage from "./error-page";
import Todos from "./routes/Todos";

const usedRoutes = routes();

const router = createBrowserRouter([
  {
    path: usedRoutes.index,
    element: <Index />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: routes().root,
        element: <Root />,
        children: [
          { path: usedRoutes.rootFirst, element: <First /> },
          { path: usedRoutes.rootSecond, element: <Second /> },
        ],
      },
      { path: usedRoutes.todos, element: <Todos /> },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

