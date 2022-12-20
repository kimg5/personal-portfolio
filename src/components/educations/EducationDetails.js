import React from "react";
import "./education.css";
import { BsFillClockFill, BsBookFill, BsFillAwardFill } from "react-icons/bs";

function EducationDetails({ school, subject, duration, courses, gpa }) {
  const courseList = courses.map((c) => <li>{c}</li>);

  return (
    <article className="education">
      <div className="education__head">
        <h3>{school}</h3>
        <p>{subject}</p>
      </div>

      <ul className="education__list">
        <li>
          <BsFillClockFill />
          {/* <p>
            <i>Duration: {duration}</i> */}
          <ul className="education_courseList">Duration: {duration}</ul>
          {/* </p> */}
        </li>
        <li>
          <BsBookFill />
          <ul className="education_courseList">Courses: {courseList}</ul>
        </li>

        <li>
          <BsFillAwardFill />
          {/* <p>GPA: {gpa}</p> */}
          <ul className="education_courseList">GPA: {gpa}</ul>
        </li>
      </ul>
    </article>
  );
}

export default EducationDetails;
