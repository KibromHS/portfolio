import React, { useState } from 'react';
import { AppWrap, MotionWrap } from '../../wrapper';
import { client } from '../../client';
import { images } from '../../constants';
import './Footer.scss';

const Footer = () => {
    const [formData, setFormData] = useState({name: '', email: '', message: ''});
    const [formSubmitted, setFormSubmitted] = useState(false);
    const [loading, setLoading] = useState(false);
    const [isError, setIsError] = useState(false);
    const [errorName, setErrorName] = useState('');

    const {name, email, message} = formData;

    const handleInput = (e) => {
        const {name, value} = e.target;
        setFormData({...formData, [name]: value});
    }

    const handleSubmit = () => {
        setLoading(true);

        if (name === '' || email === '' || message === '') {
            setIsError(true);
            setLoading(false);
            return;
        }

        const contact = {
            _type: 'contact',
            name,
            email,
            message
        }

        client.create(contact).then(() => {
            setIsError(false);
            setFormSubmitted(true);
            setLoading(false);
        }).catch(err => {
            setIsError(true);
            setErrorName(err.name);
            setLoading(false);
            console.log(err);
        });
    }

    return (
        <>
            <h2 className="head-text">Take a <span>coffee</span> and <span>chat</span> with me</h2>
            <div className="app__footer-cards">
                <div className="app__footer-card">
                    <img src={images.email} alt="email" />
                    <a href="mailto:kibromhs81@gmail.com">kibromhs81@gmail.com</a>
                </div>
                <div className="app__footer-card">
                    <img src={images.mobile} alt="mobile" />
                    <a href="tel:+251945525249">+251 945 52 52 49</a>
                </div>
            </div>

            {!formSubmitted ? <div className="app__footer-form app__flex">
                <div className="app__flex">
                    <input type="text" name="name" className="p-text" placeholder='Your Name' value={name} onChange={handleInput} />
                </div>
                <div className="app__flex">
                    <input type="text" name="email" className="p-text" placeholder='Your Email' value={email} onChange={handleInput} />
                </div>
                <div>
                    <textarea name="message" className='p-text' placeholder='Your Message...' value={message} onChange={handleInput}></textarea>
                </div>
                <button type="button" className="p-text" onClick={handleSubmit}>{loading ? 'Sending...' : 'Submit Message'}</button>
            </div>
            : <div>
                <h3 className='head-text'>Thanks for getting in touch</h3>    
            </div>}
            {isError && <p className='error'>An error "{errorName}" has occured message not sent!</p>}
        </>
    );
}

export default AppWrap(MotionWrap(Footer, 'app__footer'), 'contact', 'app__whitebg');