import React, { useRef, useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import './Education.css';
import Logo from './sfit.jpeg';

gsap.registerPlugin(ScrollTrigger);

const Education = () => {
  const eduRef = useRef(null);
  

  useEffect(() => {
    const elements = [eduRef.current];

    elements.forEach((element) => {
      gsap.fromTo(
        element,
        { scale: 0.5, opacity: 0 },
        {
          scale: 1,
          opacity: 1,
          duration: 1,
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
      <h1  className='eduhead'>Education</h1>
      <section id="education" className="education-section">
        <div className="education-container">
          <div className="education-image">
            <img src={Logo} alt="College" />
          </div>
          <div ref={eduRef} className="education-text">
            <h2>St Francis Institute of Technology</h2>
            <p>Dec 2021 - May 2025</p>
            <p>B.E (Information Technology)</p>
          </div>
        </div>
      </section>
    </>
  );
};

export default Education;
