import React, { useState, useEffect } from 'react';
import { AiFillEye, AiFillGithub } from 'react-icons/ai';
import { motion } from 'framer-motion';

import { AppWrap, MotionWrap } from '../../wrapper';
import { client, urlFor } from '../../client';
import './Work.scss';

const Work = () => {
    const [activeFilter, setActiveFilter] = useState('All');
    const [animateCard, setAnimateCard] = useState({y: 0, opacity: 1});
    const [works, setWorks] = useState([]);
    const [filterWork, setFilterWork] = useState([]);
    const [tags, setTags] = useState([]);

    useEffect(() => {
        function getAllTags(data) {
            function arraymove(arr, fromIndex, toIndex) {
                var element = arr[fromIndex];
                arr.splice(fromIndex, 1);
                arr.splice(toIndex, 0, element);
            }
            
            let allTags = [];
            
            for (let i = 0; i < data.length; i++) {
                for (let j = 0; j < data[i].tags.length; j++) {
                    allTags.push(data[i].tags[j])
                }
            }
            allTags.push('All');
    
            allTags = [...new Set(allTags)];
            arraymove(allTags, allTags.indexOf('All'), allTags.length - 1);
            return allTags;
        }

        const query = '*[_type == "works"]';

        client.fetch(query)
            .then((data) => {
                setWorks(data);
                setFilterWork(data);
                setTags(getAllTags(data));
            });
    }, []);

    const handleWorkFilter = (item) => {
        setActiveFilter(item);
        setAnimateCard({y: 100, opacity: 0});
        setTimeout(() => {
            setAnimateCard({y: 0, opacity: 1});
            if (item === 'All') {
                setFilterWork(works);
            } else {
                setFilterWork(works.filter(work => work.tags.includes(item)));
            }
        }, 500);
    }

    return (
        <div id='work'>
            <h2 className='head-text'>My creative <span>portfolio</span></h2>
            <div className="app__work-filter">
                {tags.map((item, index) => {
                    return (
                        <div 
                            key={index} 
                            onClick={() => handleWorkFilter(item)}
                            className={`app__work-filter-item app__flex p-text ${activeFilter === item ? 'item-active' : ''}`}
                        >
                            { item }
                        </div>
                    );
                })}
            </div>

            <motion.div
                animate={animateCard}
                transition={{duration: 0.5, delayChildren: 0.5}}
                className='app__work-portfolio'
            >
                {filterWork.map((work, index) => {
                    return <div className='app__work-item app__flex' key={index}>
                        <div className="app__work-img app__flex">
                            <img src={urlFor(work.imgUrl).url()} alt={work.name} />
                            <motion.div
                                whileHover={{opacity: [0, 1]}}
                                transition={{duration: 0.25, ease: 'easeInOut', staggerChildren: 0.5}}
                                className='app__work-hover app__flex'
                            >
                                <a href={work.projectLink} target="_blank" rel="noreferrer">
                                    <motion.div
                                        whileInView={{scale: [0, 1]}}
                                        whileHover={{scale: [1, 0.9]}}
                                        transition={{duration: 0.25}}
                                        className='app__flex'
                                    >
                                        <AiFillEye />
                                    </motion.div>
                                </a>

                                <a href={work.codeLink} target="_blank" rel="noreferrer">
                                    <motion.div
                                        whileInView={{scale: [0, 1]}}
                                        whileHover={{scale: [1, 0.9]}}
                                        transition={{duration: 0.25}}
                                        className='app__flex'
                                    >
                                        <AiFillGithub />
                                    </motion.div>
                                </a>
                            </motion.div>
                        </div>
                        
                        <div className="app__work-content app-flex">
                            <h4 className='bold-text'> {work.title} </h4>
                            <p className="p-text" style={{marginTop: 10}}> {work.desc} </p>

                            <div className="app__work-tag app__fle">
                                <p className="p-text"> {work.tags[0]} </p>
                            </div>
                        </div>
                    </div>
                })}
            </motion.div>
        </div>
    );
}

export default AppWrap(MotionWrap(Work, 'app__works'), 'work', 'app__primarybg');