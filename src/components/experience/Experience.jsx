import React, { useContext } from "react";
import "./experience.css";
import Skills from "./Skills";
import { PersonContext } from "../../App";

const Experience = () => {
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
    <section id="experience">
      <h5>Experience</h5>
      <h2>My skills</h2>
      {console.log(experience)}
      <div className="container experience__container">
        {experience.length > 0 && experience.map(({title,css,skills,key}) => {
           return <Skills title={title} css={css} skills={skills} key={key} />;
        })}
      </div>
    </section>
  );
};

export default Experience;
