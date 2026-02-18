import { createBrowserRouter } from "react-router-dom";
import RootLayout from "../layouts/RootLayout";
import Home from "../components/Home";
import CreateCoffee from "../components/CreateCoffee";

const PublicRoutes = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout></RootLayout>,
    children: [
      {
        index: true,
        element: <Home></Home>,
        loader: () => fetch(`http://localhost:5000/readCoffees`),
      },
      {
        path: "/createCoffee",
        element: <CreateCoffee></CreateCoffee>,
      },
    ],
  },
]);

export default PublicRoutes;
