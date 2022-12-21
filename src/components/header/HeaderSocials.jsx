import React, { useContext } from 'react'
import {BsLinkedin} from 'react-icons/bs'
import {FaGithub} from 'react-icons/fa'
import { PersonContext } from '../../App'

const HeaderSocials = () => {
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
  ] = useContext(PersonContext);
  console.log(info);
  return (
    <div className='header__socials'>
        <a href={info.linkedin} target="_blank"><BsLinkedin/></a>
        <a href={info.github} target="_blank"><FaGithub/></a>
    </div>
  )
}

export default HeaderSocials