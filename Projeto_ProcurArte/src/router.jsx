import { createBrowserRouter } from "react-router-dom";
import Home from "./pages/home";
import Login from "./pages/login";
import Registro from "./pages/register";
import Conta from "./pages/account";

const router = createBrowserRouter([
  {
    path: "/home",
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
    path: "/account",
    element: <Conta></Conta>,
  },
]);

export default router;
