import React from "react";
import "./services.css";
import { BiCheck } from "react-icons/bi";

const Services = () => {
  return (
    <section id="services">
      <h5>What I Offer</h5>
      <h2>Services</h2>

      <div className="container services_container">
        <article className="service">
          <div className="service_head">
            <h3>Web Development</h3>
          </div>

          <ul className="service_list">
            <li>
            <span className="me-1">
                <BiCheck className="service_list-icon" />
              </span>
              <p>
                Expertise in building fast end-to-end web applications using
                MERN stack
              </p>
            </li>
            <li>
            <span className="me-1">
                <BiCheck className="service_list-icon" />
              </span>
              <p>
                Design and implementation of secure and scalable RESTful APIs.
              </p>
            </li>
            <li>
            <span className="me-1">
                <BiCheck className="service_list-icon" />
              </span>
              <p>Building of responsive web applications</p>
            </li>
            <li>
            <span className="me-1">
                <BiCheck className="service_list-icon" />
              </span>
              <p>Debugging</p>
            </li>
            <li>
            <span className="me-1">
                <BiCheck className="service_list-icon" />
              </span>
              <p>Deployments</p>
            </li>
            <li>
            <span className="me-1">
                <BiCheck className="service_list-icon" />
              </span>
              <p>Performance check</p>
            </li>
          </ul>
        </article>
        {/* end of web development */}
        <article className="service">
          <div className="service_head">
            <h3>Training</h3>
          </div>

          <ul className="service_list">
            <li>
            <span className="me-1">
                <BiCheck className="service_list-icon" />
              </span>
              <p>Fullstack development, covering MERN, Python, Django.</p>
            </li>
            <li>
            <span className="me-1">
                <BiCheck className="service_list-icon" />
              </span>
              <p>Offering guardiance and mentorship to aspiring developers</p>
            </li>
            <li>
            <span className="me-1">
                <BiCheck className="service_list-icon" />
              </span>
              <p>Physical and Online Coaching</p>
            </li>
            <li>
            <span className="me-1">
                <BiCheck className="service_list-icon" />
              </span>
              <p>Conducting workshops on web development</p>
            </li>
            <li>
            <span className="me-1">
                <BiCheck className="service_list-icon" />
              </span>
              <p>Technical Curricula Development</p>
            </li>
            <li>
            <span className="me-1">
                <BiCheck className="service_list-icon" />
              </span>
              <p>Product Research</p>
            </li>
          </ul>
        </article>
        {/* end of web development */}
        <article className="service">
          <div className="service_head">
            <h3>Technical Writing</h3>
          </div>

          <ul className="service_list">
            <li>
              <span className="me-1">
                <BiCheck className="service_list-icon" />
              </span>
              <p>
                Creating of learner friendly Github repositories covering core
                concepts in Javascript, Python, Node, etc.
              </p>
            </li>
            <li>
              <span className="me-1">
                <BiCheck className="service_list-icon" />
              </span>
              <p>
                Developing step-by-step tutorials on various web development
                concepts, tools, and frameworks for learners and professionals.
              </p>
            </li>
            <li>
              <span className="me-1">
                <BiCheck className="service_list-icon" />
              </span>
              <p>
                Providing clear and comprehensive documentation for codebases,
                APIs, and technical projects to enhance understanding and
                maintainability.
              </p>
            </li>
            <li>
              <span className="me-1">
                <BiCheck className="service_list-icon" />
              </span>
              <p>Open source contributions</p>
            </li>
       
          </ul>
        </article>
      </div>
    </section>
  );
};

export default Services;
