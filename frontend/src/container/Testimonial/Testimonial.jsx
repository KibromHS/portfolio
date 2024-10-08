import React, { useState, useEffect } from 'react';
import './Testimonial.scss';

import { motion } from 'framer-motion';
import { HiChevronLeft, HiChevronRight } from 'react-icons/hi';
import { AppWrap, MotionWrap } from '../../wrapper';
import { client, urlFor } from '../../client';
import ReactTooltip from 'react-tooltip';

const Testimonial = () => {
    const [brands, setBrands] = useState([]);
    const [testimonials, setTestimonials] = useState([]);
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        const brandsQuery = '*[_type == "brands"]';
        const testimonialsQuery = '*[_type == "testimonials"]';

        client.fetch(brandsQuery).then(data => setBrands(data));
        client.fetch(testimonialsQuery).then(data => setTestimonials(data));
    }, []);

    const handleClick = (index) => setCurrentIndex(index);

    const testimonial = testimonials[currentIndex];

    return (
        <>
            {testimonials.length && (
                <>
                    <div className="app__testimonial-item app__flex">
                        <img src={urlFor(testimonial.imageurl).url()} alt="testimonial" />
                        <div className="app__testimonial-content">
                            <p className="p-text"> {testimonial.feedback} </p>
                            <div>
                                <h4 className="bold-text"> {testimonial.name} </h4>
                                <h5 className="p-text"> {testimonial.company} </h5>
                            </div>
                        </div>
                    </div>
                    <div className="app__testimonial-btns app__flex">
                        <div className="app__flex" onClick={() => handleClick(currentIndex === 0 ? testimonials.length - 1 : currentIndex - 1)}>
                            <HiChevronLeft />
                        </div>
                        <div className="app__flex" onClick={() => handleClick(currentIndex === testimonials.length - 1 ? 0 : currentIndex + 1)}>
                            <HiChevronRight />
                        </div>
                    </div>
                </>
            )}
            <div className="app__testimonial-brands app__flex">
                {brands.map((brand) => {
                    return (
                        <motion.div
                            whileInView={{opacity: [0, 1]}}
                            transition={{duration: 0.5, type: 'tween'}}
                            key={brand._id}
                            data-tip
                            data-for={brand.name}
                        >
                            <img src={urlFor(brand.imgUrl).url()} alt={brand.name} />
                            <ReactTooltip
                                id={brand.name}
                                effect='solid'
                                arrowColor='#fff'
                                className='skills-tooltip'
                            >
                                {brand.name}
                            </ReactTooltip>
                        </motion.div>
                    );
                })}
            </div>
        </>
    );
}

export default AppWrap(MotionWrap(Testimonial, 'app__testimonial'), 'testimonials', 'app__primarybg');