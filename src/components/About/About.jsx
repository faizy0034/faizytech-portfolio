import React from "react";
import { FaReact, FaHtml5, FaCss3Alt, FaJs, FaGithub } from "react-icons/fa";
import "./about.css";

const About = () => {
  return (
    <section className="about" id="about">
      <div  className="about-content" style={{ display: "flex", alignItems: "center", justifyContent: "space-between", flexWrap: "wrap" }}>
        <h2>About Me</h2>
        <p>
          Hi 👋, I'm <strong>Faizol</strong> — a passionate Frontend Developer
          based in Ibadan, Nigeria. I enjoy turning beautiful designs into
          responsive and functional web interfaces.
        </p>
        <div className="about-buttons">
          <a href="/Faizol-CV.pdf" download className="btn">
            Download CV
          </a>
          <a href="#contact" className="btn btn-outline">
            Contact Me
          </a>
        </div>
      </div>

      <div className="about-skills">
        <h3>Tools & Technologies</h3>
        <div className="skills-icons">
          <FaReact className="icon react" />
          <FaHtml5 className="icon html" />
          <FaCss3Alt className="icon css" />
          <FaJs className="icon js" />
          <FaGithub className="icon github" />
        </div>
      </div>
    </section>
  );
};

export default About;
