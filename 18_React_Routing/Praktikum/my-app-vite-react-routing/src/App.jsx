import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import CreateProduct from "./pages/CreateProduct";
import EditProduct from "./pages/EditProduct";

function App() {
  const [isSubmit, setSubmit] = useState([]);
  return (
    <>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<LandingPage/>}></Route>
            <Route path="/CreateProduct" element={<CreateProduct isSubmit={isSubmit} setSubmit={setSubmit} />}></Route>
            <Route path="/Product/:id" element={<EditProduct isSubmit={isSubmit}/>}></Route>
          </Routes>
        </BrowserRouter>
    </>
  );
}

export default App;
