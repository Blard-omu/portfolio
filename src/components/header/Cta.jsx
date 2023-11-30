import React from 'react'
import CV from '../../assets/CV.pdf'

const Cta = () => {
  return (
    <div className='cta'>
        <a href={CV} download className='btn btn-primary me-3'>Download CV</a>
        <a href="#contact" className='btn btn-primary'>Let's Chat</a>

    </div>
  )
}

export default Cta