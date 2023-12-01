import React, { useState } from "react";
import "./portfolio.css";
import projects from "./portfolioDB";

const Portfolio = () => {
  const [showAll, setShowAll] = useState(false);
  const displayedProjects = showAll ? projects : projects.slice(0, 3);

  return (
    <section id="portfolio">
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>
      <div className="container portfolio">
        {displayedProjects &&
          displayedProjects.map((project) => {
            return (
              <article
                className="portfolio-item"
                key={project._id}
                style={{ background: `url(${project.banner})` }}
              >
                <div className="portfolio-body">
                  <p>{project.title}</p>
                  <p>{project.description}</p>
                  <div className="portfolio-links">
                    <a href={project.github_repo_link} className="btn" target="_blank">
                      {project.github_icon}
                    </a>
                    <a
                      href={project.live_demo_link}
                      className="btn btn-primary"
                      target="_blank"
                    >
                      Live Demo
                    </a>
                  </div>
                </div>
              </article>
            );
          })}
      </div> 
      <div className="more text-center mt-4">

      {projects.length > 3 && (
          <button className="btn btn-primary" onClick={() => setShowAll(!showAll)}>
            {showAll ? "Show Less" : "View All"}
          </button>
        )}
        </div>     

    </section>
  );
};

export default Portfolio;
