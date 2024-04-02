import { createBrowserRouter } from "react-router-dom";
import RootLayout from "../layouts/RootLayout";
import Home from "../pages/Home";
import Shop from "../pages/Shop";
import Categories from "../pages/Categories";
import Brand from "../pages/Brand";
import Account from "../pages/Account";
import Login from "../pages/Login";
import SignUp from "../pages/SignUp";
import PrivateRoute from "../components/PrivateRoute";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "/shop",
        element: <Shop />,
      },
      {
        path: "/categories",
        element: <Categories />,
      },
      {
        path: "/brand",
        element: <Brand />,
      },
      {
        path: "/account",
        element: (
          <PrivateRoute>
            <Account />
          </PrivateRoute>
        ),
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/sign-up",
        element: <SignUp />,
      },
    ],
  },
]);

export default routes;
