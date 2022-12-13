import React from "react";
import Skill from "./Skill";
import "./experience.css";

function Skills({ title, css, skills }) {
  return (
    <div className={css}>
      <h3>{title}</h3>
      <div className="experience__content">
        {skills.map(({ skill, level }) => {
          return <Skill skill={skill} level={level} key={skill} />;
        })}
      </div>
    </div>
  );
}

export default Skills;
