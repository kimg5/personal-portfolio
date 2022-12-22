
import React, { useContext } from 'react';
import './education.css';
import EducationDetails from './EducationDetails';
import { PersonContext } from '../../App';

const Education = () => {
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
  


  return (
    <section id='educations'>

      <h2> My Education </h2>
   

      <div className="container education__container">
        {education.length > 0 && education.map(({school,degree, subject, country, startTime, endTime,id }) => {
          return  <EducationDetails  school={school} subject={subject} degree = {degree} startTime={startTime.slice(0,10)} endTime={endTime.slice(0,10)} country={country} key={id} />  ;         
        })}      
      </div>
    </section>
  )
}

export default Education;
