import React from 'react'
import Navbarcomp from '../components/Navbar/Navbarcomp'
import Footercomp from '../components/Footer/Footercomp'
import MovieList from '../components/ListPreview/MovieList'
import AboutUs from '../components/AboutUs/AboutUs'

const AboutusPage = () => {
  return (
    <div>
        <Navbarcomp/>
        <AboutUs/>
        <Footercomp/>
    </div>
  )
}

export default AboutusPage