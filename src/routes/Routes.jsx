import { createBrowserRouter } from "react-router-dom";
import Main from "../layouts/Main";
import Home from "../pages/Home/Home";
import Login from "../pages/Login/Login";
import Register from "../pages/Register/Register";
import AddAServices from "../pages/Add A Services/AddAServices";
import AllService from "../components/AllService/AllService";
import ServiceCardDetails from "../components/ServiceCardDetails";
import ManageService from "../pages/ManageService/ManageService";
import BookedService from "../pages/BookedService/BookedService";
import ErrorPage from "../components/ErrorPage/ErrorPage";
import BookService from "../pages/BookService/BookService";
import UpdateService from "../pages/ManageService/UpdateService";
import PrivateRoute from "./PrivateRoute";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
        loader: () => fetch(`${import.meta.env.VITE_API_URL}/services`),
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
        loader: () => fetch(`${import.meta.env.VITE_API_URL}/services`),
      },
      {
        path: "/addAService",
        element: (
          <PrivateRoute>
            <AddAServices></AddAServices>
          </PrivateRoute>
        ),
      },
      {
        path: "/serviceDetails/:id",
        element: (
          <PrivateRoute>
            <ServiceCardDetails></ServiceCardDetails>
          </PrivateRoute>
        ),
        loader: ({ params }) =>
          fetch(`${import.meta.env.VITE_API_URL}/services/${params.id}`),
      },
      {
        path: "/manageService",

        element: (
          <PrivateRoute>
            <ManageService></ManageService>,
          </PrivateRoute>
        ),
        loader: () =>
          fetch(
            "https://assignment-11-server-epjpr19us-abu-jahers-projects.vercel.app/services"
          ),
      },
      {
        path: "/bookedService",
        element: (
          <PrivateRoute>
            <BookedService></BookedService>
          </PrivateRoute>
        ),
        loader: () => fetch(`${import.meta.env.VITE_API_URL}/bookings`),
      },
      {
        path: "/bookService/:id",
        element: (
          <PrivateRoute>
            <BookService></BookService>
          </PrivateRoute>
        ),
        loader: ({ params }) =>
          fetch(`${import.meta.env.VITE_API_URL}/services/${params.id}`),
      },
      {
        path: "/updateService/:id",
        element: <UpdateService></UpdateService>,
        loader: ({ params }) =>
          fetch(`${import.meta.env.VITE_API_URL}/services/${params.id}`),
      },
    ],
  },
]);

export default router;
