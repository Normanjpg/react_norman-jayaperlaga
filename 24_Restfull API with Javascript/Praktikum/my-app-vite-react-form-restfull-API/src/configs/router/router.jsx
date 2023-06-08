// import React from "react";
// import EditProduct from "../../pages/EditProduct";
// import CreateProduct from "../../pages/CreateProduct";
// import LandingPage from "../../pages/LandingPage";

// const router = [
//   {
//     path: "/",
//     element: <LandingPage/>,
//   },
//   {
//     path: "/CreateProduct",
//     element: <CreateProduct/>,
//   },
//   {
//     path: "/edit/:id",
//     element: <EditProduct/>
//   }
// ];

// export default router;

import React, { useState } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import LandingPage from '../../pages/LandingPage'
import CreateProduct from '../../pages/CreateProduct'
import EditProduct from '../../pages/EditProduct'
import Login from '../../pages/Login'
import Signup from '../../pages/Signup'
// import CreateAccount from '../../pages/CreateAccount'
import ConvertCurrencyPages from '../../Eksplorasi/ConvertCurrencyPages'
import DataProduct from '../../pages/DataProduct'
import PrivateRoute from '../PrivateRoute/PrivateRoute'
import Detailprodct from '../../pages/Detailprodct'



const RouterRouting = () => {
    const [isSubmit, setSubmit] = useState([]);
  return (
    <>
    <BrowserRouter>
        <Routes>
          <Route path="/" element={<LandingPage />}></Route>
          <Route path="/CreateProduct" element={<CreateProduct />}></Route>
          <Route path="/editproduct/:id" element={<EditProduct />}></Route>
          <Route path="/detailproduct/:id" element={<Detailprodct />}></Route>
          <Route path="/login" element={<Login />}></Route>
          <Route path="/signup" element={<Signup />}></Route>
          {/* <Route path="/CreateAccount" element={<CreateAccount />}></Route> */}
          <Route path='/ConvertCurrency' element={<ConvertCurrencyPages />}></Route>
          <Route element={<PrivateRoute user={false} />}>
            <Route path="/DataProduct" element={<DataProduct />}></Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default RouterRouting