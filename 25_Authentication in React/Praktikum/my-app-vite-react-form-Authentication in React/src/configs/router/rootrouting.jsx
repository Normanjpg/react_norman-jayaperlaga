import React from "react";
import { useSelector } from "react-redux";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { routing } from "./routing";
import PrivateRoute from "../PrivateRoute/PrivateRoute";

const Rootrouting = () => {
  const Login = useSelector((state) => state.auth.isLogin);

  return (
    <BrowserRouter>
      <Routes>
        {routing.map((route, idx) => {
          if (route.isPrivate) {
            return (
              <Route
                key={idx}
                path={route.path}
                element={
                  <PrivateRoute authentication={Login}>
                    {route.element}
                  </PrivateRoute>
                }
              />
            );
          }
          return <Route key={idx} path={route.path} element={route.element}/>
        })}
      </Routes>
    </BrowserRouter>
  );
};

export default Rootrouting;
