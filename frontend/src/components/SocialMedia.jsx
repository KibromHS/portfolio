import React from 'react';
import {  BsTwitter, BsInstagram } from 'react-icons/bs';
import { FaFacebookF } from 'react-icons/fa';

const SocialMedia = () => {
    return (
        <div className='app__social'>
            <a href='https://twitter.com/kibromhs/' target='_blank' rel='noopener noreferrer' id='twitter'>
                <BsTwitter />
            </a>
            <a href='https://facebook.com' target='_blank' rel='noopener noreferrer' id='facebook'>
                <FaFacebookF />
            </a>
            <a href='https://www.instagram.com/kibromhs/' target='_blank' rel='noopener noreferrer' id='instagram'>
                <BsInstagram />
            </a>
        </div>
    );
}

export default SocialMedia;