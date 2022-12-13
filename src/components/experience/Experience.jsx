import React from "react";
import "./experience.css";
import Skills from "./Skills";

const Experience = () => {
  const meta = {
    title: "What Skills I Have",
    subtitle: "My Experience",

    items: [
      {
        title: "Frontend Development",
        key: "frontend",
        css: "experience__frontend",
        skills: [
          {
            skill: "HTML",
            level: "Experienced",
          },
          {
            skill: "CSS",
            level: "Intermediate",
          },
          {
            skill: "JavaScript",
            level: "Experienced",
          },
          {
            skill: "Bootstrap",
            level: "Experienced",
          },
          {
            skill: "Tailwind",
            level: "Experienced",
          },
          {
            skill: "React",
            level: "Experienced",
          },
        ],
      },
      {
        title: "Backend Development",
        css: "experience__backend",
        key: "backend",
        skills: [
          {
            skill: "Node JS",
            level: "Experienced",
          },
          {
            skill: "MongoDB",
            level: "Intermediate",
          },
          {
            skill: "PHP",
            level: "Intermediate",
          },
          {
            skill: "MySql",
            level: "Basic",
          },
          {
            skill: "Python",
            level: "Experienced",
          },
        ],
      },
    ]
  };

  return (
    <section id="experience">
      <h5>{meta.title}</h5>
      <h2>{meta.subtitle}</h2>

      <div className="container experience__container">
        {meta.items.map(({title, css, key, skills}) => {
           return <Skills title={title} css={css} skills={skills} key={key} />;
        })}
      </div>
    </section>
  );
};

export default Experience;
