import React from 'react';
import './index.css';

const PersonalPortfolio = () => {
  return (
    <div className="portfolio-container">
      <header className="header">
        <h1 className="name">Your Name</h1>
        <nav className="navbar">
          <a href="#about">About</a>
          <a href="#skills">Skills</a>
          <a href="#projects">Projects</a>
          <a href="#contact">Contact</a>
        </nav>
      </header>
      
      <section id="about" className="about">
        <h2>About Me</h2>
        <p>Hello! I'm a software developer with expertise in PHP, JavaScript, and SwiftUI. I have a passion for creating dynamic and responsive web applications, as well as beautiful mobile interfaces.</p>
      </section>
      
      <section id="skills" className="skills">
        <h2>Skills</h2>
        <div className="skills-list">
          <div className="skill-item">
            <h3>PHP</h3>
            <p>Experience with Laravel, Symfony, and WordPress.</p>
          </div>
          <div className="skill-item">
            <h3>JavaScript</h3>
            <p>Proficient in React, Node.js, and Angular.</p>
          </div>
          <div className="skill-item">
            <h3>SwiftUI</h3>
            <p>Skilled in building iOS applications with Swift and SwiftUI.</p>
          </div>
        </div>
      </section>
      
      <section id="projects" className="projects">
        <h2>Projects</h2>
        <div className="project-item">
          <h3>Project 1</h3>
          <p>Description of the project. Tools and technologies used: PHP, JavaScript.</p>
        </div>
        <div className="project-item">
          <h3>Project 2</h3>
          <p>Description of the project. Tools and technologies used: SwiftUI.</p>
        </div>
        <div className="project-item">
          <h3>Project 3</h3>
          <p>Description of the project. Tools and technologies used: PHP, SwiftUI, JavaScript.</p>
        </div>
      </section>
      
      <section id="contact" className="contact">
        <h2>Contact</h2>
        <p>Email: <a href="mailto:your.email@example.com">your.email@example.com</a></p>
        <p>LinkedIn: <a href="https://www.linkedin.com/in/yourprofile" target="_blank" rel="noopener noreferrer">yourprofile</a></p>
        <p>GitHub: <a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer">yourusername</a></p>
      </section>
      
      <footer className="footer">
        <p>&copy; 2024 Your Name. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default PersonalPortfolio;
