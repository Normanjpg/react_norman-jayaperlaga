import React from 'react'
import {Navigate, Outlet } from "react-router-dom";

const PrivateRoute = ({authentication, children}) => {
    if(!authentication){
        return <Navigate to={'/login'} />
    }
    return children;
}

export default PrivateRoute