import React from "react";
import "./education.css";
import { IoSchoolOutline } from "react-icons/io5";

const data = [
  {
    degree: "Master in Computer Science",
    school: "John Abbott College",
    city: "Montreal",
    country: "CA",
    startTime: "April, 2018",
    endTime: "May, 2020",
  },
  {
    degree: "Bachelor in Art",
    school: "Concordia University",
    city: "Montreal",
    country: "CA",
    startTime: "April, 2012",
    endTime: "May, 2016",
  },
];

const Education = () => {
  return (
    <section id="education">
      <h5>What about my education</h5>
      <h2>Educations</h2>

      <div className="container education__container">
        {data.map(({ degree, school, city, country, startTime, endTime }) => {
          return (
            <article className="education">
              <ul className="education__list">
                <li>
                  <IoSchoolOutline className="education__list-icon" />
                  <h4 className="school">{degree}</h4>
                  <h4>@ {school}</h4>
                  <h4>
                    {city} {country}
                  </h4>

                  <span>
                    {startTime} - {endTime}
                  </span>
                </li>
              </ul>
            </article>
          );
        })}
      </div>
    </section>
  );
};

export default Education;
