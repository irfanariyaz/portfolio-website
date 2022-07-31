import React from 'react'
import { About } from './components/About/About'
import { Contact } from './components/contact/Contact'
import Header from "./components/header/Header"
import Nav from "./components/nav/Nav"
import Footer from "./components/footer/Footer"
import Testimonials from "./components/testimonials/Testimonials"
import Experience from "./components/experience/Experience"
import Services from "./components/services/Services"
import Portfolio from "./components/portfolio/Portfolio"

const App = () => {
  return (
    <>
    
        <Header />
        <Nav />
        <About />
        <Experience />
        <Services />
        <Portfolio />
        <Testimonials />
        <Contact />
        <Footer />
    </>
  )
}

export default App