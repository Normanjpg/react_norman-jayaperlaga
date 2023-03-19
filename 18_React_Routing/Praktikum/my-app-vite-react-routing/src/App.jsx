import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import router from "./configs/router/router";
import EditProduct from "./components/TableList/EditProduct";

function App() {
  return (
    <div>
      <div>
        <BrowserRouter>
          <Routes>
            {router.map((route, index) => {
              return (
                <Route
                  path={route.path}
                  element={route.element}
                  key={index}
                ></Route>
              );
            })}
          </Routes>
        </BrowserRouter>
      </div>
    </div>
  );
}

export default App;
