import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router-dom";
import PublicRoutes from "./routes/PublicRoutes";
import AuthContextProvider from "./providers/AuthContextProvider";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <AuthContextProvider>
      <RouterProvider router={PublicRoutes}></RouterProvider>
    </AuthContextProvider>
  </StrictMode>,
);
