import React from 'react'
import './header.css'
import CTA from './CTA'
import HeaderSocial from './HeaderSocials'

const Header = () => {
  const person = {
    name :'Hajia Bintu',
    title : 'Fullstack Developer',
    image: process.env.PUBLIC_URL + '/images/me.png',
  }
 return (
    <header>
      <div className="container header__container">
        <h5>Hello I'm</h5>
        <h1>{person.name}</h1>
        <h5 className="text-light">{person.title}</h5>
        <CTA />
        <HeaderSocial />

        <div className="me">
          <img src={person.image} alt="me" />
        </div>
    </div>
    </header>
  )
}

export default Header
