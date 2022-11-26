import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import './About.scss';
import { client, urlFor } from '../../client';
import { AppWrap, MotionWrap } from '../../wrapper';

const About = () => {
    const [abouts, setAbouts] = useState([]);

    useEffect(() => {
        const query = '*[_type == "abouts"]';
        client.fetch(query).then((data) => setAbouts(data));
    }, []);

    return (
        <div id='about'>
            <h2 className="head-text">
                I know that<span> Good Design</span> <br />
                means<span> Good Business</span>
            </h2>

            <div className="app__profile">
                {abouts.map((about) => {
                    return (
                        <motion.div
                            whileInView={{opacity: 1}}
                            whileHover={{scale: 1.1}}
                            transition={{duration: 0.3, type: 'tween'}}
                            className='app__profile-item'
                            key={about.title}
                        >
                            <img src={urlFor(about.imgUrl).url()} alt={about.title} />
                            <h2 className="bold-text" style={{marginTop: 20}}> { about.title } </h2>
                            <p className="p-text" style={{marginTop: 10}}> { about.desc } </p>
                        </motion.div>
                    );
                })}
            </div>
        </div>
    );
}

export default AppWrap(MotionWrap(About, 'app__about'), 'about', 'app__whitebg');