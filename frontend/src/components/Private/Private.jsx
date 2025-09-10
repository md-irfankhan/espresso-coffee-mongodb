import { useContext } from "react";
import { Navigate, useLocation } from "react-router";
import { AuthContext } from "../../AuthProvider/AuthProvider";

const Private = ({children}) => {
    const location=useLocation()
    const {loading,user}=useContext(AuthContext)
    if(loading){
        return (
            <div className="flex justify-center items-center min-h-screen">
                <h1 className="text-4xl font-rancho">Loading...</h1>
            </div>
        )
    }
    if(user){
        return children;
    }
    return (
        <div>
            <Navigate to={'/login'} state={location.pathname}></Navigate>
            
        </div>
    );
};

export default Private;