import React from 'react'
import "../Style_Sheet/Footer.css"

const Footer = () => {
  return (
        <footer>
            <p>Copyright c 2024 CodePair. All rights reserved.</p>
            <div className="footer-link">
                <a href="/helpcenter">Help Center</a>
                <a href="/student">Student</a>
                <a href="/terms">Terms</a>
                <a href="/privacy">privacy policy</a>
                <a href="/contact">Contact</a>
                <h4>India</h4>
            </div>
        </footer>
  )
}

export default Footer