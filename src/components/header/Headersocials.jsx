import React from 'react'
import {BsLinkedin} from 'react-icons/bs'
import {FaGithub, FaYoutube} from 'react-icons/fa'


const Headersocials = () => {
  return (
    <div className='header_socials'>
        <a href="https://www.linkedin.com/blard-omu" target='blank'><BsLinkedin/></a>
        <a href="https://www.github.com/blard-omu" target='blank'><FaGithub/></a>
        <a href="https://www.youtube.com" target='blank'><FaYoutube/></a>

    </div>
  )
}

export default Headersocials