/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState, useEffect, useCallback } from 'react';
import { motion, useAnimation } from 'framer-motion';
import './Projects.css';
import ArrowOutwardIcon from '@mui/icons-material/ArrowOutward';
import Ezquiz from './ezquiz.png';
import Ngo from './ngo.png'
import Paw from './pawprint.png'


const Projects = () => {
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
            title: 'NGO System',
            description: 'Built an NGO management system using Python, Django, and Firebase. Allowed users to search and view NGOs, their work, and join or donate directly. Utilized Django admin for admin portal, HTML, CSS, Bootstrap, and Jinja2 template engine.',
            link: 'https://github.com/DanielThatu47/Python_Miniproject_SEITB_50_48_47_51.git',
            imageUrl: Ngo
        },
        {
            title: 'Pet Daycare System',
            description: 'Created a pet daycare management system including pet activities, services, and booking features. Services included grooming, daycare, veterinary services, boarding, and visit management. Allowed users to book services and view bookings.',
            link: '#',
            imageUrl:Paw
        },
        {
            title: 'AI Quiz Generator System',
            description: 'Developed an AI-powered quiz generator system for classrooms. Teachers can create classrooms, generate quizzes from text prompts, and post announcements. Students can join classrooms, view quizzes and announcements, attempt quizzes, and view scores.',
            link: 'https://projectsem6.vercel.app',
            imageUrl: Ezquiz
        },
    ];   


    const handleLinkClick = (url) => {
        window.open(url, '_blank', 'noopener,noreferrer');
    };
    return (
        <div className="projects-container">
            <h1 className='projectshead'>Projects</h1>
            {sections.map((section, index) => (
                <motion.div
                    className="project-card"
                    key={index}
                    custom={index}
                    animate={controls}
                >
                    <div className="card-header">
                        <span className='title'>{section.title}</span>
                        <a ><ArrowOutwardIcon className="arrow-icon"
                        onClick={() => handleLinkClick(section.link)}  /></a>
                    </div>
                    <h1 className='heading'>{section.title}</h1>
                    <h3 classsName='description'>{section.description}</h3>
                    <div className="image-container">
                        <img src={section.imageUrl} alt={section.title} className="project-image" />
                    </div>
                </motion.div>
            ))}
        </div>
    );
};

export default Projects;
