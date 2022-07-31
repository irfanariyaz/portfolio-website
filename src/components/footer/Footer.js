import React from 'react'
import"./footer.css"
import {AiFillFacebook}  from "react-icons/ai"
import {FaInstagramSquare}  from "react-icons/fa"
import {AiFillLinkedin}  from "react-icons/ai"
export default function Footer() {
  return (
    <footer>
      <a href="#" className='footer__logo'>IRFANA</a>

      <ul className="permalinks">
        <li><a href="#">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#experience">Experience</a></li>
        <li><a href="#services">Services</a></li>
        <li><a href="#portfolio">Portfolio</a></li>
        <li><a href="#testimonials">Testimonials</a></li>
        <li><a href="#contact">Contact</a></li>
        
      </ul>
      <div className="footer__socials">
          <a href="https://facebook.com"><AiFillFacebook /></a>
          <a href="https://instagram.com"><FaInstagramSquare /></a>
          <a href="https://linkedin.com"><AiFillLinkedin /></a>
      </div>
      <div className="footer__copyright">
        <small>&copy;Irfana Sulaiman, All rights reserved</small>
      </div>
    </footer>
  )
}
