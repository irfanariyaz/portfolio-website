import React from 'react'
import "./contact.css"
import {HiOutlineMail} from "react-icons/hi"
import{RiMessengerLine} from "react-icons/ri"
import{BsWhatsapp} from "react-icons/bs"

export const Contact = () => {
  return (
    <section id='contact'>
      <h5>Get in touch</h5>
      <h2>Contat Me</h2>
      <div className="container contact__container">
        <div className="contact__methods">
          <article className="contact__detail">
            <HiOutlineMail  className='contact__detail-icon '/>
            <h4>Email</h4>
            <h5>email@gmail.com</h5>
            <a href="mailto:irfana.27@gmail.com"target="_blank">Send a message</a>
          </article>
          <article className="contact__detail">
            <RiMessengerLine className='contact__detail-icon '/>
            <h4>Messenger</h4>
            <h5>email@gmail.com</h5>
            <a href="https://www.messenger.com/"target="_blank">Send a message</a>
          </article>
          <article className="contact__detail">
            <BsWhatsapp  className='contact__detail-icon '/>
            <h4>Whatsapp</h4>
            <h5>email@gmail.com</h5>
            <a href="https://web.whatsapp.com/"target="_blank">Send a message</a>
          </article>
        </div>
        <form action="">
         <input type="text" name='name'
         placeholder='Your full name' required />
         <input type="email" name="email" 
         placeholder='Your email' required  />
         <textarea name='message' rows={7}
         placeholder="Your Message" required ></textarea>
         <button type='submit' className='btn btn-primary'>Send Message</button>
        </form>
      </div>
    </section>
  )
}
