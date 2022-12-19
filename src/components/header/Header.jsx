import React, { useContext } from 'react'
import './header.css'
import CTA from './CTA'
import HeaderSocial from './HeaderSocials'
import { PersonContext } from '../../App'
 

const Header = () => {
  const [header,setHeader] = useContext(PersonContext)

 return (
    <header>
      <div className="container header__container">
        <h5>Hello I'm</h5>
        <h1>{header.name}</h1>
        <h5 className="text-light">{header.title}</h5>
        <CTA />
        <HeaderSocial />

        <div className="me">
          <img src={header.image} alt="me" />
        </div>
    </div>
    </header>
  )
}

export default Header
