import React, { useState, useEffect, useRef } from 'react';
import { Link as ScrollLink } from 'react-scroll';
import './Navbar1.css'; // Import the custom CSS

const Navbar1 = () => {
  const [expanded, setExpanded] = useState(false);
  const navbarRef = useRef(null);

  const toggleNavbar = () => {
    setExpanded(!expanded);
  };

  const closeNavbar = () => {
    setExpanded(false);
  };

  // Handle click outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (navbarRef.current && !navbarRef.current.contains(event.target)) {
        setExpanded(false);
      }
    };

    // Only add listener when menu is expanded
    if (expanded) {
      document.addEventListener('mousedown', handleClickOutside);
      document.addEventListener('touchstart', handleClickOutside);
    }

    // Cleanup
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.removeEventListener('touchstart', handleClickOutside);
    };
  }, [expanded]);

  return (
    <nav className="navbar" ref={navbarRef}>
      <a href="/" className="navbar-brand">
        Daniel's Portfolio
      </a>
      <button 
        className="navbar-toggler"
        onClick={toggleNavbar}
      >
        <i className={`fas ${expanded ? 'fa-times' : 'fa-bars'} toggle-icon`}></i>
      </button>
      <div className={`navbar-collapse ${expanded ? 'show' : ''}`}>
        <button 
          className="navbar-close"
          onClick={closeNavbar}
        >
          <i className="fas fa-times close-icon"></i>
        </button>
        <ul className="navbar-nav">
          <li className="nav-item">
            <ScrollLink
              to="about"
              smooth={true}
              duration={400}
              className="nav-link"
              onClick={closeNavbar}
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
              onClick={closeNavbar}
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
              onClick={closeNavbar}
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
              onClick={closeNavbar}
              offset={-53}
            >
              Achievements
            </ScrollLink>
          </li>
          <li className="nav-item">
            <ScrollLink
              to="certifications"
              smooth={true}
              duration={1500}
              className="nav-link"
              onClick={closeNavbar}
              offset={-53}
            >
              Certifications 
            </ScrollLink>
          </li>
          <li className="nav-item">
            <ScrollLink
              to="contact"
              smooth={true}
              duration={500}
              className="nav-link"
              onClick={closeNavbar}
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