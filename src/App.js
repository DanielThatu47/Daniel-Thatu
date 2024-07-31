import React from 'react';
import Navbar from './components/Navbar/Navbar1';
import Education from './components/Education/Education';
import Skills from './components/Skills/Skills';
import Projects from './components/Projects/Projects';
import Achievements from './components/Achievements/Achievements';
import Certifications from './components/Certification/Certifications';
import Footer from './components/Footer/Footer';
import './index.css';
import About from './components/About/About';
import { Element } from 'react-scroll';
import NetworkStatus from './components/NetworkStatus/NetworkStatus';

const App = () => (

<>
 <NetworkStatus>
  <div>
    <Navbar />
    <Element name="about">
    <div id="about">
      <About />
    </div>
    </Element>

    <Element name="Education">
    <div id="education">
      <Education />
    </div>
    </Element>

    <Element name="skills">
    <div id="skills">
      <Skills />
    </div>
    </Element>
    <div id="projects">
      <Projects />
    </div>
    <div id="achievements">
      <Achievements />
    </div>
    <div id="certifications">
      <Certifications />
    </div>
    <div id="contact">
      <Footer />
    </div>
  
  </div>
</NetworkStatus>

</>
);

export default App;
