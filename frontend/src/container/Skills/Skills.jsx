import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

import { AppWrap, MotionWrap } from '../../wrapper';
import { client, urlFor } from '../../client';
import ReactTooltip from 'react-tooltip';
import './Skills.scss';

const Skills = () => {
    const [skills, setSkills] = useState([]);
    const [experience, setExperience] = useState([]);

    useEffect(() => {
        const skillsQuery = '*[_type == "skills"]';
        const expQuery = '*[_type == "experience"]';

        client.fetch(skillsQuery).then(data => setSkills(data));
        client.fetch(expQuery).then(data => setExperience(data));
    }, []);

    return (
        <>
            <h2 className='head-text'>Skills <span>&amp;</span> Experience</h2>
            <div className="app__skills-container">
                <motion.div className='app__skills-list'>
                    {skills.map(skill => {
                        return (
                            <motion.div
                                key={skill.name}
                                whileInView={{opacity: [0, 1]}}
                                transition={{duration: 0.5}}
                                className='app__skills-item app__flex'
                            >
                                <div className="app__flex" style={{backgroundColor: skill.bgColor}}>
                                    <img src={urlFor(skill.icon).url()} alt={skill.name} />
                                </div>
                                <p className="p-text"> {skill.name} </p>
                            </motion.div>
                        );
                    })}
                </motion.div>
                <motion.div className='app__skills-exp'>
                    {experience.map(experience => {
                        return <div className='app__skills-exp-item' key={experience.year}>
                            <div className="app__skills-exp-year">
                                <p className="bold-text"> {experience.year} </p>
                            </div>
                            <motion.div className='app__skills-exp-works'>
                                {experience.works.map((work, index) => {
                                    return <div key={`${work} ${index}`}>
                                        <motion.div
                                            key={work.name}
                                            whileInView={{opacity: [0, 1]}}
                                            transition={{duration: 0.5}}
                                            className='skills__app-exp-work'
                                            data-tip
                                            data-for={work.name}
                                        >
                                            <h4 className="bold-text"> {work.name} </h4>
                                            <p className="p-text"> {work.company} </p>
                                        </motion.div>
            
                                        <ReactTooltip
                                            id={work.name}
                                            effect='solid'
                                            arrowColor='#fff'
                                            className='skills-tooltip'
                                        >
                                            {work.desc}
                                        </ReactTooltip>
                                    </div>
                                })}
                            </motion.div>
                        </div>
                    })}
                </motion.div>
            </div>
        </>
    );
}

export default AppWrap(MotionWrap(Skills, 'app__skills'), 'skills', 'app__whitebg');