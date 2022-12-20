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
// import { DockDemo } from './components/dock/DockDemo'
// import {useParams} from "react-router-dom"


export const PersonContext = React.createContext({
  info:{},
  setInfo:() =>{},
  header: {},
  setHeader: () => {},
  experience:[],
  setExperience: () => {},
  education:[],
  setEducation: () => {},
  projects:[], 
  setProjects: () => {},
});



const App = () => {
  // const {username} = useParams();
  // console.log(username)
  const [info, setInfo] = useState({})
  const [header, setHeader] = useState({})
  const [experience, setExperience] = useState([])
  const [education, setEducation] = useState([])
  const [projects, setProjects] = useState([])
  const personProvide = [
    info,
    setInfo,
    experience,
    setExperience,
    header,
    setHeader,
    education,
    setEducation,
    projects,
    setProjects,
   ];

   useEffect(() => {
    console.log("fetched");
      fetch("http://localhost:3001/portfolio/portfolios/xiaopei", {
        method: "GET",
      })
      .then((res) => res.json())
      .then((res) => {
        console.log(res)
        let data = res.content;
        setInfo({...data.info})
        setHeader({...data.header})
        setExperience([...data.experience])
        setEducation([...data.education])
        setProjects([...data.projects])
      
      })
      return () => {
        setInfo({});
        setHeader({});
        setEducation([]);
        setExperience([]);
        setProjects([]);
      }
      },[]);

  console.log(experience);
  return (
    <>
    <PersonContext.Provider value={personProvide}>
        <Header/>
        {/* <Nav /> */}
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