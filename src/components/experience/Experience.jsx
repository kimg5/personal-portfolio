import React, { useContext } from "react";
import "./experience.css";
import Skills from "./Skills";
import { PersonContext } from "../../App";

const Experience = () => {
  const [experience, setExperience] = React.useContext(PersonContext)
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
      <h5>{experience.title}</h5>
      <h2>{experience.subtitle}</h2>

      <div className="container experience__container">
        {experience.items.map(({title,css,skills,key}) => {
           return <Skills title={title} css={css} skills={skills} key={key} />;
        })}
      </div>
    </section>
  );
};

export default Experience;
