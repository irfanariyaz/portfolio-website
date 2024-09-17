import React from 'react'
import {BsLinkedin} from "react-icons/bs"
import  {AiOutlineGithub} from "react-icons/ai"
import { BsTwitter } from "react-icons/bs";

export default function HeaderSocials() {
  return (
    <div className='header__socials'>
        <a href="https://www.linkedin.com/in/irfana-sulaiman/" target="_blank"><BsLinkedin/></a>
        <a href="https://github.com/irfanariyaz" target="_blank"><AiOutlineGithub /></a>
        <a href="https://twitter.com/SulaimanIrfana/" target="_blank"><BsTwitter /></a>
    </div>
  )
}
