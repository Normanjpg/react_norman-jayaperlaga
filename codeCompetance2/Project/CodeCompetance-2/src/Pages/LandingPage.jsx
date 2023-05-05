import React from 'react'
import AboutUs from '../components/AboutUs/AboutUs'
import Welcome from '../components/Welcome/Welcome'
import Navbarcomp from '../components/Navbar/Navbarcomp'
import ContactUs from '../components/ContactUs/ContactUs'
import Footercomp from '../components/Footer/Footercomp'
import MovieList from '../components/ListPreview/MovieList'

const LandingPage = () => {
  return (
    <div>
        <Navbarcomp/>
        <Welcome/>
        <MovieList/>
        <AboutUs/>
        <ContactUs/>
        <Footercomp/>
    </div>
  )
}

export default LandingPage