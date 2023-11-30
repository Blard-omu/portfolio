import React from 'react'
import './about.css'
import ME from '../../assets/blard_profile2.jpeg'
import {FaAward} from 'react-icons/fa'
import {FiUsers} from 'react-icons/fi'
import {PiFolderOpen} from 'react-icons/pi'

const About = () => {
  return (
    <section id='about'>
      <h5>Get to Know</h5>
      <h2>About Me</h2>

      <div className="container about__container">
        <div className="about_me">
          <div className="about_me-image">
            <img src={ME} alt="About Image" />
          </div>

        </div>

        <div className="about_content">
          <div className="about_cards">
            <article className='about_card'>
              <FaAward className='about_icon'/>
              <h5>Experience</h5>
              <small>2 years Experience</small>
            </article>

            <article className='about_card'>
              <FiUsers className='about_icon'/>
              <h5>Clients</h5>
              <small>20+ Nigerian clients</small>
            </article>

            <article className='about_card'>
              <PiFolderOpen className='about_icon'/>
              <h5>Projects</h5>
              <small>15+ projects done</small>
            </article>
          </div>

          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur, explicabo facere? Tempore explicabo nam quas cupiditate quo. Illum aliquam voluptatum facilis hic odit impedit, atque accusantium dolor doloribus dolorem sit!
          </p>

          <a href="#contact" className='btn btn-primary'>Let's Talk</a>

        </div>
      </div>
    </section>
  )
}

export default About