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

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
        // loader: () => fetch(`${import.meta.env.VITE_API_URL}/services`),
        loader: () => fetch("http://localhost:5000/services"),
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
        loader: () => fetch("/serviceData.json"),
      },
      {
        path: "/addAService",
        element: <AddAServices></AddAServices>,
      },
      {
        path: "/serviceDetails/:id",
        element: <ServiceCardDetails></ServiceCardDetails>,
        loader: ({ params }) =>
          fetch(`http://localhost:5000/services/${params.id}`),

        // loader: ({ params }) =>
        //   fetch(`${import.meta.env.VITE_API_URL}/services/${params.id}`),
      },
      {
        path: "/manageService",
        element: <ManageService></ManageService>,
      },
      {
        path: "/bookedService",
        element: <BookedService></BookedService>,
      },
    ],
  },
]);

export default router;
