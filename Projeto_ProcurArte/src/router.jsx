import { createBrowserRouter } from "react-router-dom";
import Home from "./pages/home";
import Login from "./pages/login";
import Registro from "./pages/register";
import Dashboard from "./pages/dashboard";
import Portifolio from "./pages/portifolio";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/login",
    element: <Login></Login>,
  },
  {
    path: "/register",
    element: <Registro></Registro>,
  },
  {
    path: "/dashboard",
    element: <Dashboard></Dashboard>,
  },
  {
    path: "/portifolio",
    element: <Portifolio></Portifolio>,
  },
]);

export default router;
