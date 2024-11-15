/* eslint-disable react/prop-types */
import { Navigate, useLocation } from "react-router-dom";
import useAuth from "../../Hooks/useAuth";
import useUserData from "../../Hooks/useUserData";
import Loading from "../../Pages/Loading";

const SellerRoute = ({children}) => {
    const { user, loading } = useAuth();
    const userData = useUserData();
    const location = useLocation();

    if(loading || !userData.role){
        return <Loading/>
    }
    if (user && userData.role === 'seller') {
        return children 
    }
    return <Navigate to="/" state={{from: location}} replace></Navigate>;
};

export default SellerRoute;