import React from 'react'

const CTA = ({cv}) => {
  console.log(cv);
  return (
    <div className='cta'>
        <a href={`http://localhost:3001/portfolio/portfolios/getcv/${cv}`} download className='btn'>Download CV</a>
        <a href="#contact" className='btn btn-primary'>Let's Talk</a>
    </div>
  )
}

export default CTA
