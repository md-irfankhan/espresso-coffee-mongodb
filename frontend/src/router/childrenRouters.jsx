import AddCoffee from "../components/AddCoffee/AddCoffee";
import Details from "../components/Details/Details";
import Error from "../components/Error/Error";
import Home from "../components/Home/Home";
import Login from "../components/Login/Login";
import Private from "../components/Private/Private";
import SignUp from "../components/SignUp/SignUp";
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
        element:<Private><AddCoffee></AddCoffee></Private>
    },
    {
        path:'/update/:id',
        loader:({params})=>fetch(`http://localhost:3000/find/${params.id}`),
        element:<Private><UpdateCoffee></UpdateCoffee></Private>
    },
    {
        path:'/login',
        element:<Login></Login>

    },
    {
        path:'/register',
        element:<SignUp></SignUp>

    },
    {
        path:"*",
        element:<Error></Error>
    }
]
export default childrenRouter;