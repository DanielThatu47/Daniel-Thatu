import React, { useState, useEffect } from 'react';
import './About.css';
import Me from './Me.webp';
import Pdf from './Daniel_Thatu.pdf';
import Preview from './Preview.jpg';
import CIcon from '@coreui/icons-react';
import { cilX, cilCloudDownload } from '@coreui/icons';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const About = () => {
  const [typedText, setTypedText] = useState("");
  const [showResume, setShowResume] = useState(false);
  const text = " 'I'm a passionate developer currently pursuing B.E in Information Technology from St Francis Institute of Technology. I have experience in various programming languages and frameworks, and I enjoy building projects that solve real-world problems.";

  useEffect(() => {
    let index = 0;
    const speed = 28; // Typing speed in milliseconds

    const timer = setInterval(() => {
      if (index < text.length) {
        setTypedText(prevTypedText => prevTypedText + text.charAt(index));
        index++;
      } else {
        clearInterval(timer);
      }
    }, speed);

    return () => clearInterval(timer);
  }, []); // Empty dependency array to run effect only once on mount

  const handleImageContextMenu = (event) => {
    event.preventDefault();
  };

  const handleDownload = () => {
    toast.success("PDF successfully downloaded!");
  };

  return (
    <section id="about">
      <div className="about-container">
        <div className="about-image">
          <img src={Me} alt="Daniel Thatu" onContextMenu={handleImageContextMenu} />
          <button className="resume-button" onClick={() => setShowResume(true)}>View Resume</button>
        </div>
        <div className='intro animation'>
          <h1><i>Hi I am <span className='daniel'> <strong>Daniel Thatu</strong> </span> A WEB DEVELOPER with 2 years of experience of Building Projects With Different Tech Stacks</i></h1>
        </div>
        <div className="about-content">
          <h2>About Me</h2>
          <p className="typewriter">{typedText}</p>
        </div>
      </div>

      {showResume && (
        <div className="resume-popup">
          <div className="resume-content">
            <CIcon icon={cilX} className="close-button" onClick={() => setShowResume(false)} />

            <img src={Preview} alt="Resume Preview" className="resume-preview" onContextMenu={handleImageContextMenu} />
            <div className="download-link-container">
              <a href={Pdf} download className="download-button" onClick={handleDownload}>
                <CIcon icon={cilCloudDownload} size="xl" /> Download PDF
              </a>
            </div>
          </div>
        </div>
      )}
      <ToastContainer />
    </section>
  );
};
export default About;
