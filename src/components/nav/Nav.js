import React from 'react'
import "./nav.css"
import {AiOutlineHome} from "react-icons/ai"
import {AiOutlineUser} from "react-icons/ai"
import {BsBook} from "react-icons/bs"
import {RiServiceLine} from "react-icons/ri"
import {SiMessenger} from "react-icons/si"
import { useState } from 'react'


export default function Nav() {
  const [activeNav,setActiveNow] =useState("#")
  return (
  <nav>
    <a href="#" onClick={()=>setActiveNow("#")}className ={activeNav ==='#'? 'active': ""} ><AiOutlineHome /></a>
    <a href="#about" onClick={()=>setActiveNow("#about")} className ={activeNav === '#about'? 'active': ""}><AiOutlineUser /></a>
    <a href="#experience" onClick={()=>setActiveNow("#experience")}className ={activeNav === '#experience'? 'active': ""} ><BsBook /></a>
   
    <a href="#services" onClick={()=>setActiveNow("#services")} className ={activeNav === '#services'? 'active': ""} ><RiServiceLine /></a>
    <a href="#contact"onClick={()=>setActiveNow("#contact")}className ={activeNav === '#contact'? 'active': ""} ><SiMessenger /></a>
  </nav>
  )
}
