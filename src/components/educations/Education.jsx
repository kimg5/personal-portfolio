
import React, { useContext } from 'react';
import './education.css';
import EducationDetails from './EducationDetails';
import { PersonContext } from '../../App';

const Education = () => {
  const [education]  = React.useContext(PersonContext)
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

      <h5>{education.title}</h5>
      <h2>{education.subtitle}</h2>

      <div className="container education__container">
        {education.items.map(({school, subject, duration, courses, gpa,id }) => {
          return  <EducationDetails  school={school} subject={subject} duration={duration} courses={courses} gpa={gpa} key={id} />  ;         
        })}      
      </div>
    </section>
  )
}

export default Education;
