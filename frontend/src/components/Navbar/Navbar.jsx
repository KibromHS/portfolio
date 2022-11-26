// import React, { useState } from 'react';
import React from 'react';
import './Navbar.scss';
import { images } from '../../constants';

import { HiMenuAlt4, HiX } from 'react-icons/hi';
// import { motion } from 'framer-motion';

const handleOpenMenu = () => {
    document.getElementsByClassName('app__navbar-menu-container')[0].style.marginRight = 0;
    document.getElementsByClassName('app__navbar-menu-container')[0].style.opacity = 1;
}

const handleCloseMenu = () => {
    document.getElementsByClassName('app__navbar-menu-container')[0].style.marginRight = '-300px';
    document.getElementsByClassName('app__navbar-menu-container')[0].style.opacity = 0;
}

const Navbar = () => {
    // const [toggle, setToggle] = useState(false);

    return (
        <nav className='app__navbar'>
            <div className='app__navbar-logo'>
                <img src={images.logo} alt="" />
            </div>

            <ul className='app__navbar-links'>
                {['home', 'about', 'work', 'skills', 'testimonials', 'contact'].map((item) => {
                    return <li className='app__flex p-text' key={`link-${item}`}>
                        <div />
                        <a href={`#${item}`}>{item}</a>
                    </li>
                })}
            </ul>

            {/* <div className='app__navbar-menu'>
                <HiMenuAlt4 onClick={() => setToggle(true)} />
                
                {toggle && (
                    <motion.div
                        whileInView={{x: [200, 0], opacity: [0, 1]}}
                        transition={{duration: 0.5}}
                    >
                        <HiX onClick={() => setToggle(false)} />
                        <ul>
                            {['home', 'about', 'work', 'skills', 'testimonials', 'contact'].map((item) => {
                                return <li key={item}>
                                    <a href={`#${item}`} onClick={() => setToggle(false)}>{item}</a>
                                </li>
                            })}
                        </ul>
                    </motion.div>
                )}
            </div> */}

            <div className='app__navbar-menu'>
                <HiMenuAlt4 onClick={handleOpenMenu} />

                <div className='app__navbar-menu-container'>
                    <HiX onClick={handleCloseMenu} />
                    <ul>
                        {['home', 'about', 'work', 'skills', 'testimonials', 'contact'].map((item) => {
                            return <li key={item}>
                                <a href={`#${item}`} onClick={handleCloseMenu}>{item}</a>
                            </li>
                        })}
                    </ul>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;