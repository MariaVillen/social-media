import {useLocation, Navigate, Outlet } from "react-router-dom";
import useAuth from "../hooks/useAuth";

const RequireAuth = ({ allowedRoles }) => {

    const {auth} = useAuth();
    const location = useLocation();

    return (
        allowedRoles?.includes(auth?.user?.roles) // role exists?
         ? <Outlet /> 
         : ((auth?.user) 
            ? <Navigate to="/unauthorized" state={{from: location }} relace />
            : <Navigate to="/login" state={{from: location }} relace />)) // Put the login in the navigation history instead of the last location
}

export default RequireAuth;