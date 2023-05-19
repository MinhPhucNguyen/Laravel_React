import { Navigate, createBrowserRouter } from "react-router-dom";
import Dashboard from "../views/Dashboard";
import Surveys from "../views/Surveys";
import Login from "../views/Login";
import Signup from "../views/Signup";
import GuestLayout from "../components/GuestLayout";
import DefaultLayout from "../components/DefaultLayout";

const router = createBrowserRouter([
  {
    path: "/",
    element: <DefaultLayout />,
    children: [
      {
        path: "/dashboard",
        element: <Navigate to="/" />,
      },
      {
        path: "/",
        element: <Dashboard />,
      },
      {
        path: "surveys",
        element: <Surveys />,
      },
    ],
  },
  {
    path: "/",
    element: <GuestLayout />,
    children: [
      {
        path: "/login", // Đường dẫn tuyến đường con (khi viết path cho tuyến đường con thì không cần viết dấu / ở đầu)
        element: <Login />,
      },
      {
        path: "/signup", // Đường dẫn tuyến đường con (khi viết path cho tuyến đường con thì không cần viết dấu / ở đầu)
        element: <Signup />,
      },
    ],
  },
]);

export default router;
