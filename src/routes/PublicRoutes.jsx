import { createBrowserRouter } from "react-router-dom";
import RootLayout from "../layouts/RootLayout";
import Home from "../components/Home";
import CreateCoffee from "../components/CreateCoffee";
import UpdateCoffee from "../components/UpdateCoffee";

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
      {
        path: "/updateCoffee/:id",
        element: <UpdateCoffee></UpdateCoffee>,
        loader: ({ params }) =>
          fetch(`http://localhost:5000/readCoffees/${params.id}`),
      },
    ],
  },
]);

export default PublicRoutes;
