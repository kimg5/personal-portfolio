import React from 'react';
import './education.css';
import { BsFillClockFill, BsBookFill, BsFillAwardFill } from 'react-icons/bs';

function EducationDetails({
  school,
  subject,
  degree,
  country,
  startTime,
  endTime,
}) {
  return (
    <article className="education">
      <div className="education__head">
        <h3>{school}</h3>
        <p>{subject}</p>
      </div>

      <ul className="education__list">
        <li>
          <BsFillAwardFill />
          <p>GPA: {degree}</p>
        </li>

        <li>
          <BsFillClockFill />
          <p>
            <i>
              {startTime}-{endTime}
            </i>
          </p>
        </li>

        <li>
          <BsBookFill />
          <ul className="education_courseList">{country}</ul>
        </li>
      </ul>
    </article>
  );
}

export default EducationDetails;
