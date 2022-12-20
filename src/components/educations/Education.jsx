
import React, { useContext } from 'react';
import './education.css';
import EducationDetails from './EducationDetails';
import { PersonContext } from '../../App';

const Education = () => {
  const [
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
   ]= useContext(PersonContext);
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
        {education.length > 0 && education.map(({school, subject, duration, courses, gpa,id }) => {
          return  <EducationDetails  school={school} subject={subject} duration={duration} courses={courses} gpa={gpa} key={id} />  ;         
        })}      
      </div>
    </section>
  )
}

export default Education;
