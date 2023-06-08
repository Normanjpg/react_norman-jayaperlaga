import React from "react";
import ReactDOM from "react-dom/client";
// import { Provider } from "react-redux";
import App from "./App";
// import store, { persistedStore } from "./configs/redux/store/store"
import "./index.css";
// import { PersistGate } from "redux-persist/integration/react";


ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    {/* <Provider store={store}> */}
      {/* <PersistGate loading={null} persistor={persistedStore}> */}
      <App />
      {/* </PersistGate> */}
    {/* </Provider> */}
  </React.StrictMode>
);
