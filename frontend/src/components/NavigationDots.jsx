import React from 'react';

const NavigationDots = ({ active }) => {
    return (
        <div className='app__navigation'>
            {['home', 'about', 'work', 'skills', 'testimonials', 'contact'].map((item, index) => {
                return (
                    // eslint-disable-next-line
                    <a 
                        href={`#${item}`}
                        key={item + index} 
                        style={ active === item ? { backgroundColor: '#313BAC' } : {} }
                        className='app__navigation-dot'
                    />
                );
            })}
        </div>
    );
}

export default NavigationDots;