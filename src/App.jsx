import React, { useState, useEffect } from 'react'
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
import {useParams} from "react-router-dom"


export const PersonContext = React.createContext({
  header: {},
  setHeader: () => {},
  experience:{},
  setExperience: () => {},
  education:{},
  setEducation: () => {},
  projects:{}, 
  setProjects: () => {},
});



const App = () => {
  const {username} = useParams();
  const [header, setHeader] = useState({})
  const [experience, setExperience] = useState({})
  const [education, setEducation] = useState({})
  const [projects, setProjects] = useState({})
  const personProvide = [
    header,
    experience,
    setExperience,
    education,
    setEducation,
    projects,
    setProjects,
   ];

   useEffect(async () => {
      let person = await fetch(`http://localhost:3001/persons/${username}`, {
        method: "GET",
      })
      person = await person.json();
      setHeader([...person.header]);
      setExperience([...person.experience]);
      setEducation([...person.education]);
      setProjects([...person.projects]);
        },[]);

  return (
    <>
    <PersonContext.Provider value={personProvide}>
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
    </PersonContext.Provider>
    </>
    
  )
}

export default App