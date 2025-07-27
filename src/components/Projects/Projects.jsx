import React from 'react';
import './Projects.css';
import projectData from './projectData';

const Projects = () => {
  return (
    <section className="projects" id="projects">
      <div className="container">
        <h2 className="section-title">My Projects</h2>
        <div className="project-grid">
          {projectData.map((project) => (
            <div key={project.id} className="project-card">
              <img src={project.image} alt={project.title} className="project-image" />
              <div className="project-info">
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <a href={project.link} target="_blank" rel="noopener noreferrer" className="project-btn">
                  View Project
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
