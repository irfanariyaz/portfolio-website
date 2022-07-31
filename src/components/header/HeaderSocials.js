import React from 'react'
import {BsLinkedin} from "react-icons/bs"
import  {AiOutlineGithub} from "react-icons/ai"
import { FaDribbble } from "react-icons/fa";

export default function HeaderSocials() {
  return (
    <div className='header__socials'>
        <a href="https://www.linkedin.com/" target="_blank"><BsLinkedin/></a>
        <a href="https://www.github.com/" target="_blank"><AiOutlineGithub /></a>
        <a href="https://www.dribble.com/" target="_blank"><FaDribbble /></a>
    </div>
  )
}
