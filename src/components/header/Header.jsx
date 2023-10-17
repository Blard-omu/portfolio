import React from 'react'
import './header.css'
import CTA from './Cta'
import ME from '../../assets/blard_profile1.jpeg'
import Headersocial from './Headersocials'

const Header = () => {
  return (
   <header>
    <div className="container header_container">
      <h5>Hello I'm</h5>
      <h1>Blard Omu</h1>
      <h5 className="text-light">Fullstack Developer</h5>
      <CTA />
      <Headersocial />

      <div className='ed'>
        <img src={ME} alt="me" />
      </div>

      <a href="#contact" className='scroll__down'>Scroll Down</a>
    </div>
   </header>
  )
}

export default Header