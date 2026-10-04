import { createRoot } from "react-dom/client";
import App from "./App";
import { RouterProvider } from "react-router-dom";
import Routes from "./Routes";

createRoot(document.getElementById("root")).render(
  <RouterProvider router={Routes}>
    <App></App>
  </RouterProvider>,
);
