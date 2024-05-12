import React from 'react';
import PersonalInfo from './PersonalInfo';
import Education from './Education';
import Projects from './Project';
import Volunteering from './Volunteering';
import Achievements from './Achievements';

const CV = () => {
    return (
        <div style={{ margin: '20px', fontFamily: 'Arial, sans-serif' }}>
            <PersonalInfo />
            <Education />
            <Projects />
            <Volunteering />
            <Achievements />
        </div>
    );
}

export default CV;
