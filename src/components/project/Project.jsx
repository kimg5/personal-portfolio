import React from 'react'
import './project.css'
import IMG1 from '../../assets/portfolio1.jpg'
import IMG2 from '../../assets/portfolio2.jpg'
import IMG3 from '../../assets/portfolio3.jpg'
import IMG4 from '../../assets/portfolio4.jpg'
import IMG5 from '../../assets/portfolio5.png'
import IMG6 from '../../assets/portfolio6.jpg'
import { PersonContext } from '../../App'
import { useContext } from 'react'


const Project = () => {
  const [
    info,
    setInfo,
    aboutPhoto,
    setAboutPhoto,
    experience,
    setExperience,
    header,
    setHeader,
    education,
    setEducation,
    projects,
    setProjects,
    cv,
    setCv
   ] = useContext(PersonContext)


  return (
    <section id='portfolio'>
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio__container">
        {projects.length > 0 &&
         projects.map(({id,image,title,github,demo}) => {
            return (
              <article key={id} className='portfolio__item'>
                {image &&<div className="portfolio__item-image">
               <img src={`http://localhost:3001/portfolio/portfolios/getphoto/${image}`} alt={title} />
              </div>}
              <h3>{title}</h3>
              <div className="portfolio__item-cta">
                <a href={github} className='btn' target='_blank'>Github</a>
                <a href={demo} className='btn btn-primary' target='_blank'>Live Demo</a>
              </div>
            </article>
            )
          })
        }
      </div>
    </section>
  )
}

export default Project;
