import React from 'react';
import Banner from './Banner';
import Skills from './Skills/Skills';
import Projects from './Project/Projects';
import ContactMe from './ContactMe/ContactMe';
import AboutMe from '../AboutMe/AboutMe';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Skills></Skills>
            <Projects></Projects>
            <AboutMe></AboutMe>
            <ContactMe></ContactMe>
        </div>
    );
};

export default Home;