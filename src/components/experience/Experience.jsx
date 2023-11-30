import React from 'react'
import './experience.css'
import { ImHtmlFive2 } from "react-icons/im";
import { IoLogoCss3, IoLogoNodejs } from "react-icons/io5";
import { IoLogoJavascript } from "react-icons/io";
import { FaBootstrap, FaPython } from "react-icons/fa";
import { SiTailwindcss, SiDjango, SiExpress, SiMysql, SiMongodb, SiPostgresql, SiGraphql, SiSwagger } from "react-icons/si";
import { GrReactjs } from "react-icons/gr";

const Experience = () => {
  return (
    <section id='experience'>
      <h5>Here's</h5>
      <h2>My Stacks</h2>

      <div className="container experience_container">
        <div className="experience_frontend">
          <h3>Frontend Development</h3>
          <div className="experience_content">
            <article className='experience_details'>
              <div className='text-center'>
              <h4><ImHtmlFive2/></h4>
              <small className='text-light'>HTML</small>
              </div>
            </article>
            <article className='experience_details'>
              <div className='text-center'>
              <h4><IoLogoCss3/></h4>
              <small className='text-light'>CSS</small>
              </div>
            </article>
            <article className='experience_details'>
              <div className='text-center'>
              <h4><FaBootstrap/></h4>
              <small className='text-light'>Bootstrap</small>
              </div>
            </article>
            <article className='experience_details'>
              <div className='text-center'>
              <h4><SiTailwindcss/></h4>
              <small className='text-light'>Tailwind</small>
              </div>
            </article>
            <article className='experience_details'>
              <div className='text-center'>
              <h4><IoLogoJavascript/></h4>
              <small className='text-light'>Javascript</small>
              </div>
            </article>
            <article className='experience_details'>
              <div className='text-center'>
              <h4><GrReactjs/></h4>
              <small className='text-light'>React</small>
              </div>
            </article>
          </div>
          
        </div>
        <div className="experience_backend">
          <h3>Backend Development</h3>
          <div className="experience_content">
          <article className='experience_details'>
              <div className='text-center'>
              <h4><FaPython/></h4>
              <small className='text-light'>Python</small>
              </div>
            </article>
            <article className='experience_details'>
              <div className='text-center'>
              <h4><SiDjango/></h4>
              <small className='text-light'>Django</small>
              </div>
            </article>
            <article className='experience_details'>
              <div className='text-center'>
              <h4><IoLogoNodejs/></h4>
              <small className='text-light'>Node</small>
              </div>
            </article>
            <article className='experience_details'>
              <div className='text-center'>
              <h4><SiExpress/></h4>
              <small className='text-light'>Express</small>
              </div>
            </article>
            <article className='experience_details'>
              <div className='text-center'>
              <h4><SiMysql/></h4>
              <small className='text-light'>MySQL</small>
              </div>
            </article>
            <article className='experience_details'>
              <div className='text-center'>
              <h4><SiMongodb/></h4>
              <small className='text-light'>MongoDB</small>
              </div>
            </article>
            <article className='experience_details'>
              <div className='text-center'>
              <h4><SiPostgresql/></h4>
              <small className='text-light'>PostgreSQL</small>
              </div>
            </article>
            <article className='experience_details'>
              <div className='text-center'>
              <h4><SiGraphql/></h4>
              <small className='text-light'>GraphQL</small>
              </div>
            </article>
            <article className='experience_details'>
              <div className='text-center'>
              <h4><SiSwagger/></h4>
              <small className='text-light'>Swagger-UI</small>
              </div>
            </article>           
          </div>
        </div>
      </div>
    </section>
  )
}

export default Experience