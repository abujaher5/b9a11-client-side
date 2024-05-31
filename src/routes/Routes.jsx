import { createBrowserRouter } from "react-router-dom";
import Main from "../layouts/Main";
import Home from "../pages/Home/Home";
import Login from "../pages/Login/Login";
import Register from "../pages/Register/Register";
import AddAServices from "../pages/Add A Services/AddAServices";
import AllService from "../components/AllService/AllService";

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
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
      {
        path: "/allService",
        element: <AllService></AllService>,
      },
      {
        path: "/addAService",
        element: <AddAServices></AddAServices>,
      },
    ],
  },
]);

export default router;
