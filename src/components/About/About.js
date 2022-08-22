import React from 'react'
import "./about.css"
import ME from "../../assets/melarge.jpg"
import {RiAwardFill} from 'react-icons/ri'
import {BsPeopleFill} from 'react-icons/bs'
import {IoLibrary} from 'react-icons/io5'
export const About = () => {
  return (
    <section id='about'>
      <h5>Get to know</h5>
      <h2>About Me</h2>
      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={ME} alt="me" />
          </div>
        </div>
          <div className="about__content">
            <div className="about__cards">
              <article className='about__card'>
                <RiAwardFill  className ="about__icon"/>
              <h5>Experience</h5>
              <small>2+ years</small>
              </article>
              <article className='about__card'>
                <BsPeopleFill  className ="about__icon"/>
              <h5>Clients</h5>
              <small>2+ years</small>
              </article>
              <article className='about__card'>
                <IoLibrary  className ="about__icon"/>
              <h5>Projects</h5>
              <small>2+ years</small>
              </article>
            </div>
            <p>Software developer, Designed, developed and deployed dynamic web applications using Python ,Django and ReactJS. Built web application and software using HTML, CSS and javascript. Skilled at writing well-designed , testable, and efficient codes using the best practices in Web Development.
</p>
            <a href="#contact" className='btn btn-primary'>Contact</a>
          </div>
         
      </div>
    </section>
  )
}
