import React from 'react'
import "./services.css"
import {HiCheck} from "react-icons/hi"
export default function Services() {
  return (
    <section id='services'>
       <h5>What I offer</h5>
      <h2>My Services</h2>
      <div className="container service__container">
        <article className='service'>
          <div className="service_head">
            <h3>UI/UX</h3>
          </div>
          <ul className='service__list'>
            <li>
              <HiCheck className='service__list-icon'/>
              <p>hello pus </p>
            </li>
            <li>
              <HiCheck className='service__list-icon'/>
              <p>Lorem ipsum, dolor sit </p>
            </li>
            <li>
              <HiCheck className='service__list-icon'/>
              <p>Lorem ipsum, dolor sit </p>
            </li>
            <li>
              <HiCheck className='service__list-icon'/>
              <p>Lorem ipsum, dolor sit </p>
            </li>
            <li>
              <HiCheck className='service__list-icon'/>
              <p>Lorem ipsum, dolor sit </p>
            </li>
          </ul>
        </article>

        <article className='service'>
          <div className="service_head">
            <h3>Web Development</h3>
          </div>
          <ul className='service__list'>
            <li>
              <HiCheck className='service__list-icon'/>
              <p>Lorem ipsum, dolor sit </p>
            </li>
            <li>
              <HiCheck className='service__list-icon'/>
              <p>Lorem ipsum, dolor sit </p>
            </li>
            <li>
              <HiCheck className='service__list-icon'/>
              <p>Lorem ipsum, dolor sit </p>
            </li>
            <li>
              <HiCheck className='service__list-icon'/>
              <p>Lorem ipsum, dolor sit </p>
            </li>
            <li>
              <HiCheck className='service__list-icon'/>
              <p>Lorem ipsum, dolor sit </p>
            </li>
            <li>
              <HiCheck className='service__list-icon'/>
              <p>Lorem ipsum, dolor sit </p>
            </li>
          </ul>
        </article>

        <article className='service'>
          <div className="service_head">
            <h3>Content Creation</h3>
          </div>
          <ul className='service__list'>
            <li>
              <HiCheck className='service__list-icon'/>
              <p>Lorem ipsum, dolor sit </p>
            </li>
            <li>
              <HiCheck className='service__list-icon'/>
              <p>Lorem ipsum, dolor sit </p>
            </li>
            <li>
              <HiCheck className='service__list-icon'/>
              <p>Lorem ipsum, dolor sit </p>
            </li>
            <li>
              <HiCheck className='service__list-icon'/>
              <p>Lorem ipsum, dolor sit </p>
            </li>
            <li>
              <HiCheck className='service__list-icon'/>
              <p>Lorem ipsum, dolor sit </p>
            </li>
          </ul>

        </article>
      </div>
    </section>
  )
}
