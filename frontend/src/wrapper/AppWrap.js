import React from 'react';
import {  NavigationDots, SocialMedia } from '../components';

const AppWrap = (Component, idName, classNames) => function HOC() {
    return (
        <div id={idName} className={`app__container ${classNames}`}>
            <SocialMedia />

            <div className='app__wrapper app__flex'>
                <Component />
                {idName === 'work' ? '' : <div className='copyright'>
                    <p className='p-text'>@2023 KIBROM</p>
                    <p className='p-text'>All rights reserved</p>
                </div>}
            </div>

            <NavigationDots active={idName} />
        </div>
    );
}

export default AppWrap;