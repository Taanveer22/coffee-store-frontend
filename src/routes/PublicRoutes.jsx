import { createBrowserRouter } from "react-router-dom";
import RootLayout from "../layouts/RootLayout";
import Home from "../components/Home";
import CreateCoffee from "../components/CreateCoffee";
import UpdateCoffee from "../components/UpdateCoffee";
import Register from "../components/Register";
import Users from "../components/Users";
import Signin from "../components/Signin";

const PublicRoutes = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout></RootLayout>,
    children: [
      {
        index: true,
        element: <Home></Home>,
        loader: () =>
          fetch(`https://coffee-store-backend-rho.vercel.app/readCoffees`),
      },
      {
        path: "/createCoffee",
        element: <CreateCoffee></CreateCoffee>,
      },
      {
        path: "/updateCoffee/:id",
        element: <UpdateCoffee></UpdateCoffee>,
        loader: ({ params }) =>
          fetch(
            `https://coffee-store-backend-rho.vercel.app/readCoffees/${params.id}`,
          ),
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
      {
        path: "/signin",
        element: <Signin></Signin>,
      },
      {
        path: "/users",
        element: <Users></Users>,
        loader: () =>
          fetch(`https://coffee-store-backend-rho.vercel.app/readUsers`),
      },
    ],
  },
]);

export default PublicRoutes;
