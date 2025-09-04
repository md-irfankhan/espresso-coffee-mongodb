import { createBrowserRouter } from "react-router";
import Layout from "../Layout";
import childrenRouter from "./childrenRouters";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Layout></Layout>,
        children:childrenRouter
    },
    {
        path:"*",
        element:<h1>404</h1>
    }
]);

export default router;