import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import Checkout from "../Pages/Checkout/Checkout";
import Home from "../Pages/Home/Home";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Login/Register";
import Orders from "../Pages/Orders";
import PrivetRoute from "./PrivetRoute";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "login",
        element: <Login></Login>,
      },
      {
        path: "register",
        element: <Register></Register>,
      },
      {
        path: "checkout/:id",
        element: <Checkout></Checkout>,
        loader: ({ params }) => fetch(`http://localhost:5000/services/${params.id}`),
      },
      {
        path: "orders",
        element: (
          <PrivetRoute>
            <Orders></Orders>
          </PrivetRoute>
        ),
      },
    ],
  },
]);

export default router;
