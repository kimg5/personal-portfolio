
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
  // const education = {
  //   title: "What about my education",
  //   subtitle: "Educations",

  //   items: [
  //     {
  //       school: "Bachelor.Concordia University",
  //       subject: "Computer Science",
  //       duration: "09/2000 - 06/2004",
  //       courses: ["Programming1", "Database", "Web development1"],
  //       gpa: "4.0",
  //     },
  //     {
  //       school: "Master. Concordia University",
  //       subject: "Computer Science",
  //       duration: "09/2004 - 06/2007",
  //       courses: ["Programming2", "Data Structure", "Web development2"],
  //       gpa: "3.8",
  //     }
  //   ]
  // }


  return (
    <section id='educations'>

      <h2> My Education </h2>
   

      <div className="container education__container">
        {education.length > 0 && education.map(({school,degree, subject, country, startTime, endTime,id }) => {
          return  <EducationDetails  school={school} subject={subject} degree = {degree} startTime={startTime} endTime={endTime} country={country} key={id} />  ;         
        })}      
      </div>
    </section>
  )
}

export default Education;
