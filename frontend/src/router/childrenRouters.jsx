import AddCoffee from "../components/AddCoffee/AddCoffee";
import Details from "../components/Details/Details";
import Error from "../components/Error/Error";
import Home from "../components/Home/Home";
import Login from "../components/Login/Login";
import UpdateCoffee from "../components/UpdateCoffee/UpdateCoffee";

const childrenRouter=[
    {
        path:"/",
        loader:()=>fetch('http://localhost:3000/'),
        element:<Home></Home>
    },
    {
        path:'/details/:id',
        loader:({params})=>fetch(`http://localhost:3000/find/${params.id}`),
        element:<Details></Details>
    },
    {
        path:'/add',
        element:<AddCoffee></AddCoffee>
    },
    {
        path:'/update/:id',
        loader:({params})=>fetch(`http://localhost:3000/find/${params.id}`),
        element:<UpdateCoffee></UpdateCoffee>
    },
    {
        path:'/login',
        element:<Login></Login>

    },
    {
        path:"*",
        element:<Error></Error>
    }
]
export default childrenRouter;