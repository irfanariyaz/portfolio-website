import React from 'react'
import "./experience.css"
import {BsCheckCircleFill} from "react-icons/bs"

export default function Experience() {
  return (
    <section id='experience'>
      <h5>Skills I have</h5>
      <h2>My Expertise</h2>
      <div className="container experience__container">
        <div className="experience__frontend">
          <h3>Frontend Development</h3>
          <div className="experience__content">
            <article className="experience__details">
              <BsCheckCircleFill  className='experience__details-icon' />
              <div>
                <h4>HTML</h4>
                <small className='text-light'>experienced</small>
              </div>
            </article>
            <article className="experience__details">
              <BsCheckCircleFill  className='experience__details-icon' />
              <div>
                <h4>Javascript</h4>
                <small className='text-light'>experienced</small>
              </div>
            </article>
            <article className="experience__details">
              <BsCheckCircleFill className='experience__details-icon'  />
              <div>
                <h4>CSS</h4>
                <small className='text-light'>experienced</small>
              </div>
            </article>
            <article className="experience__details">
              <BsCheckCircleFill  className='experience__details-icon' />
              <div>
                <h4>React</h4>
                <small className='text-light'>experienced</small>
              </div>
            </article>
            <article className="experience__details">
              <BsCheckCircleFill  className='experience__details-icon' />
              <div>
                <h4>Bootstrap</h4>
                <small className='text-light'>experienced</small>
              </div>
            </article>
            {/* <article className="experience__details">
              <BsCheckCircleFill className='experience__details-icon'  />
              <div>
                <h4>HTML</h4>
                <small className='text-light'>experienced</small>
              </div>
            </article> */}
          </div>
       </div>

       <div className="experience__backend">
          <h3>Backend Development</h3>
          <div className="experience__content">
            <article className="experience__details">
              <BsCheckCircleFill className='experience__details-icon'  />
              <div>
                <h4>Django</h4>
                <small className='text-light'>experienced</small>
              </div>
            </article>
            <article className="experience__details">
              <BsCheckCircleFill className='experience__details-icon'  />
              <div>
                <h4>NodeJs</h4>
                <small className='text-light'>experienced</small>
              </div>
            </article>
            <article className="experience__details">
              <BsCheckCircleFill  className='experience__details-icon' />
              <div>
                <h4>DjangoREST</h4>
                <small className='text-light'>experienced</small>
              </div>
            </article>
            <article className="experience__details">
              <BsCheckCircleFill className='experience__details-icon'  />
              <div>
                <h4>MysQl</h4>
                <small className='text-light'>experienced</small>
              </div>
            </article>
            <article className="experience__details">
              <BsCheckCircleFill className='experience__details-icon'  />
              <div>
                <h4>Python</h4>
                <small className='text-light'>experienced</small>
              </div>
            </article>
          </div>
      </div>
      </div>
    </section>
  )
}
