import React from 'react'
import "./header.css"
import CTA from './CTA'
import ME from "../../assets/metrans.png"
import HeaderSocials from './HeaderSocials'

export default function Header() {
  return (
    <header id='home'>
      <div class="container header__container">
        <h5>Hello I'm</h5>
        <h1>Irfana Sulaiman</h1>
        <h5 className='text-light'>Full Stack Developer</h5>
        <CTA />
        <HeaderSocials />
        <div className='me'>
          <img src={ME} alt="" />
        </div>
        <a href="#contact" className='scroll__down'>Scroll Down</a>
      </div>

    </header>
  )
}
