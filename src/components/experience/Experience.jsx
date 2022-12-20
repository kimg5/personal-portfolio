import React, { useContext } from "react";
import "./experience.css";
import Skills from "./Skills";
import { PersonContext } from "../../App";

const Experience = () => {
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
  
  // const meta = {
  //   title: "What Skills I Have",
  //   subtitle: "My Experience",

  //   items: [
  //     {
  //       title: "Frontend Development",
  //       key: "frontend",
  //       css: "experience__frontend",
  //       skills: [
  //         {
  //           skill: "HTML",
  //           level: "Experienced",
  //         },
  //         {
  //           skill: "CSS",
  //           level: "Intermediate",
  //         },
  //         {
  //           skill: "JavaScript",
  //           level: "Experienced",
  //         },
  //         {
  //           skill: "Bootstrap",
  //           level: "Experienced",
  //         },
  //         {
  //           skill: "Tailwind",
  //           level: "Experienced",
  //         },
  //         {
  //           skill: "React",
  //           level: "Experienced",
  //         },
  //       ],
  //     },
  //     {
  //       title: "Backend Development",
  //       css: "experience__backend",
  //       key: "backend",
  //       skills: [
  //         {
  //           skill: "Node JS",
  //           level: "Experienced",
  //         },
  //         {
  //           skill: "MongoDB",
  //           level: "Intermediate",
  //         },
  //         {
  //           skill: "PHP",
  //           level: "Intermediate",
  //         },
  //         {
  //           skill: "MySql",
  //           level: "Basic",
  //         },
  //         {
  //           skill: "Python",
  //           level: "Experienced",
  //         },
  //       ],
  //     },
  //   ]
  // };

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
