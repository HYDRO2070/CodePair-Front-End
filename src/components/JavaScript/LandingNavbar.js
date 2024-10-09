import React from 'react'
import logo from "../img/mono.svg"
import "../Style_Sheet/LandingNavbar.css"
import { Link } from 'react-router-dom'

const LandingNavbar = () => {
  return (
    <>
        <nav className='landing-nav'>
            <div className="logo">
                <Link to="/"><img src={logo} alt="Codepair" />
                <h3>CodePair</h3></Link>
            </div>
            <div className="nav-link">
                <ul>
                    <li><Link to="/buypre">Premium</Link></li>
                    <li><a href="#explore">Explore</a></li>
                    <li><a href="#product">Product</a></li>
                    <li><a href="#developer">Developer</a></li>
                    <li><Link to="/login">Log in</Link></li>
                </ul>
            </div>
        </nav>
    </>
  )
}

export default LandingNavbar