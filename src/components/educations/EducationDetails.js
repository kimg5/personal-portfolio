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
          <p>Degree: {degree}</p>
        </li>

        <li>
          <BsFillClockFill />
          <p>
            <i>
              from&nbsp;{startTime}&nbsp;to&nbsp;{endTime}
            </i>
          </p>
        </li>

        <li>
          <BsBookFill />
          <p className="education_courseList">{country}</p>
        </li>
      </ul>
    </article>
  );
}

export default EducationDetails;
