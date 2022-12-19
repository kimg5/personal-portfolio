import React from 'react';
import './education.css';
import { BsFillClockFill, BsBookFill, BsFillAwardFill } from 'react-icons/bs';

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
          <p>
            <i>{duration}</i>
          </p>
        </li>
        <li>
          <BsBookFill />
          <ul className="education_courseList">{courseList}</ul>
        </li>

        <li>
          <BsFillAwardFill />
          <p>GPA: {gpa}</p>
        </li>
      </ul>
    </article>
  );
}

export default EducationDetails;
