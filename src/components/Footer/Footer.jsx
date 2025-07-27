import React from 'react';
import './footer.css';
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="footer">
      <p>© {new Date().getFullYear()} Faizytech. All rights reserved.</p>
      <div className="social-icons">
        <a href="https://github.com/faizytech" target="_blank" rel="noopener noreferrer"><FaGithub /></a>
        <a href="https://linkedin.com/in/faizytech" target="_blank" rel="noopener noreferrer"><FaLinkedin /></a>
        <a href="https://twitter.com/faizytech001" target="_blank" rel="noopener noreferrer"><FaTwitter /></a>
      </div>
    </footer>
  );
};

export default Footer;
