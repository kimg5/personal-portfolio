import React, { useContext } from 'react'
import './header.css'
import CTA from './CTA'
import HeaderSocial from './HeaderSocials'
import { PersonContext } from '../../App'
 

const Header = () => {
  const [
    info,
    setInfo,
    aboutPhoto,
    setAboutPhoto,
    experience,
    setExperience,
    header,
    setHeader,
    education,
    setEducation,
    projects,
    setProjects,
    cv,
    setCv
   ] = useContext(PersonContext)
  console.log(header)
 return (
    <header>
      <div className="container header__container">
        <h5>Hello I'm</h5>
        <h1>{header.Name}</h1>
        <h5 className="text-light">{header.Title}</h5>
        <CTA cv={cv}/>
        <HeaderSocial />
       
        {header.image && <div className="me">
          <img src={`http://localhost:3001/portfolio/portfolios/getphoto/${header.image}`} alt="me" />
        </div>}
    </div>
    </header>
  )
}

export default Header
