import AddCoffee from "../components/AddCoffee/AddCoffee";
import Details from "../components/Details/Details";
import Home from "../components/Home/Home";
import UpdateCoffee from "../components/UpdateCoffee/UpdateCoffee";

const childrenRouter=[
    {
        path:"/",
        element:<Home></Home>
    },
    {
        path:'/details',
        element:<Details></Details>
    },
    {
        path:'/add',
        element:<AddCoffee></AddCoffee>
    },
    {
        path:'/update',
        element:<UpdateCoffee></UpdateCoffee>
    }
]
export default childrenRouter;