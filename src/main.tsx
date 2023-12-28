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

const router = createBrowserRouter([
  {
    path: routes().index,
    element: <Index />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: routes().root,
        element: <Root />,
        children: [
          { path: routes().rootFirst, element: <First /> },
          { path: routes().rootSecond, element: <Second /> },
        ],
      },
      { path: routes().todos, element: <Todos /> },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

