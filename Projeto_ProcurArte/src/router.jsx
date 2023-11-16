import { createBrowserRouter } from "react-router-dom";
 import Home from './pages/home'
// import Signin from "./pages/Signin";
// import Search from './pages/Search'
// import Registro from "./pages/Registro";
// import Conta from "./pages/Conta";

const router = createBrowserRouter([
     {
         path: "/",
         element: <Home />,
     },
    // {
    //     path: '/procurar-artista',
    //     element: <Search></Search>
    // },
    // {
    //     path: '/signin',
    //     element: <Signin></Signin>
    // },
    // {
    //     path: '/register',
    //     element: <Registro></Registro>
    // },
    // {
    //     path: '/conta',
    //     element: <Conta></Conta>
    // }
])

export default router