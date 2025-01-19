import React, { useRef, useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import './Skills.css';

import NetBeans from './netbeans.png';
import DjangoAdmin from './django_admin.png';
import Jinja2 from './jinja2.png';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faJava, faPython, faJs, faReact} from '@fortawesome/free-brands-svg-icons';
import  CIcon  from '@coreui/icons-react';
import { cibMongodb} from '@coreui/icons';
import {cibBootstrap} from '@coreui/icons'
import {cibFirebase} from '@coreui/icons'
import{cibMysql} from '@coreui/icons'
import { cibDjango } from '@coreui/icons';
import {cibFlask} from '@coreui/icons'

gsap.registerPlugin(ScrollTrigger);

const Skills = () => {
  const programmingRef = useRef(null);
  const frameworksRef = useRef(null);
  const databasesRef = useRef(null);
  const toolsRef = useRef(null);

  useEffect(() => {
    const elements = [
      programmingRef.current,
      frameworksRef.current,
      databasesRef.current,
      toolsRef.current,
    ];

    elements.forEach((element) => {
      gsap.fromTo(
        element,
        { scale: 0.5, opacity: 0 },
        {
          scale: 1,
          opacity: 1,
          duration: 0.8,
          scrollTrigger: {
            trigger: element,
            start: 'top 80%',
            end: 'bottom 20%',
            toggleActions: 'play reverse play reverse',
          },
        }
      );
    });
  }, []);

  return (
    <>
      <h2 className='skillsheading'>Skills</h2>
      <div className="skills">
        <div className="skills-list">
          <div className="skill-card" ref={programmingRef}>
            <h3 className='program'>Programming Languages</h3>
            <div className="languages">
              <div className="language-item">
                <FontAwesomeIcon icon={faJava} className='language' />
                <p className='language-name'>Java</p>
              </div>
              <div className="language-item">
                <FontAwesomeIcon icon={faPython} className='language' />
                <p className='language-name'>Python</p>
              </div>
              <div className="language-item">
                <FontAwesomeIcon icon={faJs} className='language' />
                <p className='language-name'>JavaScript</p>
              </div>
            </div>
          </div>
          <div className="skill-card" ref={frameworksRef}>
            <h3 className='frame'>Frameworks/Libraries</h3>
            <div className="languages">
              <div className="language-item">
              <CIcon icon={cibDjango} fill='white' className='language django-icon' alt="Django" />
                <p className='language-name'>Django</p>
              </div>
              <div className="language-item">
                <FontAwesomeIcon icon={faReact} className='language' />
                <p className='language-name'>React</p>
              </div>
              <div className="language-item">
                <CIcon icon={cibBootstrap} fill='white'  className='language bootstrap-icon'/>
                <p className='language-name'>Bootstrap</p>
              </div>
              <div className="language-item">
                <CIcon icon={cibFlask} fill='white'  className='language flask-icon'/>
                <p className='language-name'>Flask</p>
              </div>
            </div>
          </div>
          <div className="skill-card" ref={databasesRef}>
            <h3 className='database'>Databases</h3>
            <div className="languages">
              <div className="language-item">
              <CIcon fill='white' icon={cibMysql} className='language sql-icon'/>
                <p className='language-name'>MySQL</p>
              </div>
              <div className="language-item">
                <CIcon fill='white' icon={cibFirebase} className='language firebase-icon' />
                <p className='language-name'>Firebase</p>
              </div>
              <div className="language-item">
              <CIcon fill='white' icon={cibMongodb} className='language  mongodb-icon' />
                <p className='language-name'>MongoDB</p>
              </div>
            </div>
          </div>
          <div className="skill-card" ref={toolsRef}>
            <h3 className='tool'>Tools</h3>
            <div className="languages">
              <div className="language-item">
              <img src={NetBeans} className='language' alt="NetBeans" />
                <p className='language-name'>NetBeans</p>
              </div>
              <div className="language-item">
                <img src={DjangoAdmin} className='language' alt="Django Admin" />
                <p className='language-name'>Django Admin</p>
              </div>
              <div className="language-item">
              <img src={Jinja2} className='language' alt="MySQL" />
                <p className='language-name'>Jinja2</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Skills;
