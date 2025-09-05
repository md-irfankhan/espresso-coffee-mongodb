import Details from "../components/Details/Details";
import Home from "../components/Home/Home";

const childrenRouter=[
    {
        path:"/",
        element:<Home></Home>
    },
    {
        path:'/details',
        element:<Details></Details>
    }
]
export default childrenRouter;