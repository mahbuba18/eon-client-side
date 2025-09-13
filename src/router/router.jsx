import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layout/MainLayout";
import Home from "../pages/Home";
import Services from "../pages/Services";
import Contact from "../pages/Contact";
import Career from "../pages/Career";
import Portfolio from "../pages/Portfolio";

const router =createBrowserRouter([
    {
        path:"/",
        element:<MainLayout></MainLayout>,
        errorElement: <h1>Router is not found.</h1>,
        children:[
            {
                path:"/",
                element:<Home></Home>
            },
            {
                path:"/",
                element:<Services></Services>
            },
            {
                path:"/career",
                element:<Career></Career>
            },
            {
                path:"/",
                element:<Contact></Contact>
            },
            {
                path:"/portfolio",
                element:<Portfolio></Portfolio>
            },

        ]
    }
])
export default router;