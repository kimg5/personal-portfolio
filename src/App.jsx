import React from 'react'
import Header from './components/header/Header'
import Nav from './components/nav/Nav'
import About from './components/about/About'
import Experience from './components/experience/Experience'
import Education from './components/educations/Education'
import Project from './components/project/Project'
import Testimonials from './components/testimonials/Testimonials'
import Contact from './components/contact/Contact'
import Footer from './components/footer/Footer'
import { DockDemo } from './components/dock/DockDemo'

const App = () => {
  return (
    <>
        <Header />
        <Nav />
        {/* <DockDemo /> */}
        <About />
        <Experience />
        <Education />
        <Project />
        <Testimonials />
        <Contact />
        <Footer /> 
    </>
  )
}

export default App