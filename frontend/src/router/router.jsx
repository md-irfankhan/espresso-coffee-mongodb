import { createBrowserRouter } from "react-router";
import Layout from "../Layout";
import childrenRouter from "./childrenRouters";
import Error from "../components/Error/Error";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Layout></Layout>,
        children:childrenRouter
    },
    
]);

export default router;