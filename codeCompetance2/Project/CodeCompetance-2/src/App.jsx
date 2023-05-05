import { useState } from "react";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import LandingPage from "./Pages/LandingPage";
import AboutusPage from "./Pages/AboutusPage";
import Welcome from "./components/Welcome/Welcome";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LandingPage />}></Route>
          <Route path="/" element={<Welcome />}></Route>
          <Route path="/aboutus" element={<AboutusPage />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
