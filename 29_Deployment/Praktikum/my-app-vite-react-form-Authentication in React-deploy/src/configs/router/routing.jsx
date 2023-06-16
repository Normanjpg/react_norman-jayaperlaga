import React from 'react'
import LandingPage from '../../pages/LandingPage'
import CreateProduct from '../../pages/CreateProduct'
import Login from '../../pages/Login'
import Signup from '../../pages/Signup'
import DataProduct from '../../pages/DataProduct'

export const routing = [
    
    {
        path: "/",
        element: <LandingPage/>,
        isPrivate:false,
    },
    {
        path: "/CreateProduct",
        element: <CreateProduct/>,
        isPrivate:true,
    },
    {
        path: "/signup",
        element: <Signup/>,
        isPrivate: false,
    },
    {
        path: "/login",
        element: <Login/>,
        isPrivate: false,
    },
    {
        path:"/DataProduct",
        element: <DataProduct/>, 
        isPrivate: true,
    }
]
  
