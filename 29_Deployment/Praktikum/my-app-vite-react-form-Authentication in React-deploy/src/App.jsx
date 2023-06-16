import { useState } from "react";
// import reactLogo from "./assets/react.svg";
import "./App.css";
import RouterRouting from "./configs/router/router";
import { Provider } from "react-redux";
import store from "./configs/redux/store/store"
import Rootrouting from "./configs/router/rootrouting";
// import { BrowserRouter, Route, Routes } from "react-router-dom";
// import LandingPage from "./pages/LandingPage";
// import CreateProduct from "./pages/CreateProduct";
// import EditProduct from "./pages/EditProduct";
// import DataProduct from "./pages/DataProduct";
// import PrivateRoute from "./configs/PrivateRoute/PrivateRoute";
// import Login from "./pages/Login";
// import CreateAccount from "./pages/CreateAccount";
// import ConvertCurrencyPages from "./Eksplorasi/ConvertCurrencyPages";
// import Signup from "./pages/Signup";


const App = () => {
  // const [isSubmit, setSubmit] = useState([]);
  return (
    <Provider store={store}>
      <Rootrouting/>
    </Provider>
  );
}

export default App;
