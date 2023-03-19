import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import CreateProduct from "./pages/CreateProduct";
import ProductNameForm from "./components/Forms/ProductNameForm";

function App() {
  return (
    <div>
      <div>
      <CreateProduct/>
      </div>
    </div>
  );
}

export default App;
