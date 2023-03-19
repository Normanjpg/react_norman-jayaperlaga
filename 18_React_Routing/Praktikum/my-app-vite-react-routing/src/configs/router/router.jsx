import React from "react";
import EditProduct from "../../components/TableList/EditProduct";
import CreateProduct from "../../pages/CreateProduct";
import LandingPage from "../../pages/LandingPage";

const router = [
  {
    path: "/",
    element: <LandingPage/>,
  },
  {
    path: "/CreateProduct",
    element: <CreateProduct />,
  },
  {
    path: "/edit/:id",
    element: <EditProduct/>
  }
];

export default router;
