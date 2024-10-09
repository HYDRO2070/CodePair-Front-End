import React from 'react'
import mono from "../img/img_2.jpg"
import "../Style_Sheet/Hero_section.css"
import { Link } from 'react-router-dom'

const Hero_section = () => {
    return (
        <div className="hero-page">
            <div className="hero-img">
                <img src={mono} alt="" />
            </div>
            <div className="hero-context">
                <h1>A New Way to Learn</h1>
                <p>CodePair is the best platform to help you enhance your skills, expand your knowledge and prepare for technical interviews.</p>
                <Link to="/signin"><button>Create Account {'>'}</button></Link>
            </div>
        </div>
    )
}

export default Hero_section