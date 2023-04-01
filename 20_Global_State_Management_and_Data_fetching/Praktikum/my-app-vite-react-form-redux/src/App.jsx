import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import CreateProduct from "./pages/CreateProduct";
import EditProduct from "./pages/EditProduct";
import DataProduct from "./pages/DataProduct";
import PrivateRoute from "./configs/PrivateRoute/PrivateRoute";
import Login from "./pages/Login";
import CreateAccount from "./pages/CreateAccount";


function App() {
  const [isSubmit, setSubmit] = useState([]);
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LandingPage />}></Route>
          <Route path="/CreateProduct" element={<CreateProduct isSubmit={isSubmit} setSubmit={setSubmit} />}></Route>
          <Route path="/Product/:id" element={<EditProduct isSubmit={isSubmit} />}></Route>
          <Route path="/login" element={<Login />}></Route>
          <Route path="/CreateAccount" element={<CreateAccount/>}></Route>
          <Route element={<PrivateRoute user={false} />}>
            <Route path="/DataProduct" element={<DataProduct />}></Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
