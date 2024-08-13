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
        // loader: () => fetch("http://localhost:5000/services"),
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
        element: <AddAServices></AddAServices>,
      },
      {
        path: "/serviceDetails/:id",
        element: <ServiceCardDetails></ServiceCardDetails>,
        // loader: ({ params }) =>
        //   fetch(`http://localhost:5000/services/${params.id}`),

        loader: ({ params }) =>
          fetch(`${import.meta.env.VITE_API_URL}/services/${params.id}`),
      },
      {
        path: "/manageService",
        element: <ManageService></ManageService>,
        loader: () => fetch("http://localhost:5000/services"),
      },
      {
        path: "/bookedService",
        element: <BookedService></BookedService>,
        loader: () => fetch(`${import.meta.env.VITE_API_URL}/bookings`),
        // loader: ({ params }) =>
        //   fetch(`${import.meta.env.VITE_API_URL}/services/${params.id}`),
      },
      {
        path: "/bookService/:id",
        element: <BookService></BookService>,
        // loader: () => fetch(`${import.meta.env.VITE_API_URL}/services`),
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
