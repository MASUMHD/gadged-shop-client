/* eslint-disable react/prop-types */
import useAuth from "../../Hooks/useAuth";
import Loading from "../../Pages/Loading";
import { Navigate, useLocation } from "react-router-dom";

const PrivateRoute = ({children}) => {
    const { user, loading } = useAuth();
    const location = useLocation();

    if(loading){
        return <Loading/>
    }
    if (user ){
        return children 
    }
    return <Navigate to="/" state={{from: location}} replace></Navigate>;
};

export default PrivateRoute;