import React, { useState } from 'react';
import { Link as ScrollLink } from 'react-scroll';
import './Navbar1.css'; // Import the custom CSS

const Navbar1 = () => {
  const [expanded, setExpanded] = useState(false);

  const toggleNavbar = () => {
    setExpanded(!expanded);
  };

  return (
    <nav className="navbar">
      <a href="/" className="navbar-brand">
        Daniel's Portfolio
      </a>
      <button 
        className="navbar-toggler"
        onClick={toggleNavbar}
      >
        &#9776; {/* Unicode for hamburger icon */}
      </button>
      <div className={`navbar-collapse ${expanded ? 'show' : ''}`}>
        <ul className="navbar-nav">
          <li className="nav-item">
            <ScrollLink
              to="about"
              smooth={true}
              duration={400}
              className="nav-link"
              onClick={toggleNavbar}
              offset={-70}

            >
              About
            </ScrollLink>
          </li>
          <li className="nav-item">
            <ScrollLink
              to="skills"
              smooth={true}
              duration={500}
              className="nav-link"
              onClick={toggleNavbar}
              offset={-70}

            >
              Skills
            </ScrollLink>
          </li>
          <li className="nav-item">
            <ScrollLink
              to="projects"
              smooth={true}
              duration={200}
              className="nav-link"
              onClick={toggleNavbar}
              offset={-73}
            >
              Projects
            </ScrollLink>
          </li>
          
          <li className="nav-item">
            <ScrollLink
              to="achievements"
              smooth={true}
              duration={1500}
              className="nav-link"
              onClick={toggleNavbar}
              offset={-53}

            >
              Achievements
            </ScrollLink>
          </li>
          <li className="nav-item">
            <ScrollLink
              to="contact"
              smooth={true}
              duration={500}
              className="nav-link"
              onClick={toggleNavbar}
              offset={-20}

            >
              Contact Me
            </ScrollLink>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar1;
