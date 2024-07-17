/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState, useEffect, useCallback } from 'react';
import { motion, useAnimation } from 'framer-motion';
import ArrowOutwardIcon from '@mui/icons-material/ArrowOutward';
import certificate from './certificate1.jpg'
import web from './Web.jpeg'
import './Certification.css'
import daniel from './Daniel_Thatu.jpg'


const Certifications = () => {
  const controls = useAnimation();
  const [current, setCurrent] = useState(0);

  const handleScroll = useCallback(() => {
    const scrollY = window.scrollY;
    const index = Math.min(Math.floor(scrollY / 400), 4);
    setCurrent(index);
  }, []);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [handleScroll]);

  useEffect(() => {
    controls.start((i) => ({
      y: i <= current ? 0 : 400,
      transition: { duration: 0.5 },
    }));
  }, [current, controls]);


  const sections = [
    {
      title: 'Learnig Python for GUI and Web Developemnt',
      description: 'Developed a sample application using Django framework which includes a Fronetend and backend. Also learned how to  connect with database in python using inbuilt django admin',
      link: 'https://drive.google.com/file/d/176fd6nkgbpmYBfLgwse65XnEdVFzmu6q/view?usp=sharing',
      imageUrl: daniel
    },
    {
      title: 'The complete Web Developement Bootcamp 2024',
      description: 'Learned in deeper HTML CSS and JavaScript , This course Enhnces the Deep Learing of MongoDB with CRUD Operations ',
      link: 'https://www.udemy.com/certificate/UC-7541ea79-dc3a-44b6-87c4-8f672f72b452/',
      imageUrl: web
    },
    {
      title: 'JavaScript Essentials 1 from Cisco Netwok Academy',
      description: 'Learned depper JavaScript competencies, including syntax understanding, data types, algorithmic thinking, data type selection, simple program development, error handling, software development process, and program execution in various environments.',
      link: 'https://www.credly.com/badges/c351eab0-9a47-464d-94d0-7b0d9b2ed18f/print',
      imageUrl: certificate
    },
    
  ];

  const handleLinkClick = (url) => {
    window.open(url, '_blank', 'noopener,noreferrer');
};

  return (
    <>

      <div className="certifications-container">
        <h1 className='certificate'>Certifications</h1>
        {sections.map((section, index) => (
          <motion.div
            className="certificate-card"
            key={index}
            custom={index}
            animate={controls}
          >
            <div className="certificate-header">
              <span>View the Certificate</span>
              <a ><ArrowOutwardIcon className="arrow-icon" 
              onClick={() => handleLinkClick(section.link)}
              /></a>
            </div>
            <h1 className='head1'>{section.title}</h1>
            <h3 className='head2'>{section.description}</h3>
            <div className="certificate-image-container">
              <img src={section.imageUrl} alt={section.title} className="certificate-image" />
            </div>
          </motion.div>
        ))}
      </div>
    </>
  );
};
export default Certifications;
