import React from "react";
import FooterLandingPage from "../components/Footer/FooterLandingPage";
import HeaderLandingPage from "../components/Header/HeaderLandingPage";
import HeroLandingPage from "../components/Hero/HeroLandingPage";
import Navbar from "../components/Navbar/Navbar";

const LandingPage = () => {
  return (
    <div>
      <div>
        <Navbar/>
      </div>
      <div>
        <HeaderLandingPage/>
      </div>
      <div>
        <HeroLandingPage/>
      </div>
      <div>
        <FooterLandingPage/>
      </div>
    </div>
  );
};

export default LandingPage;
