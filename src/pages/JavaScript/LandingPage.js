import React from 'react'
// import NavBar from '../components/JavaScript/NavBar'
import LandingNavbar from '../../components/JavaScript/LandingNavbar';
import { Link } from 'react-router-dom';
import Footer from '../../components/JavaScript/Footer';
import Hero_section from '../../components/JavaScript/Hero_section';
import Feauter_section from '../../components/JavaScript/Feauter_section';

const LandingPage = () => {
    return (
        <div>
            {/* navigation section of the landing page */}
            <LandingNavbar/>

            {/* hero section of the page */}
            <Hero_section/>

            {/*feature's section the page*/}
            <Feauter_section/>

            {/* footer section of the page */}
            <Footer/>
        </div>
    )
}

export default LandingPage