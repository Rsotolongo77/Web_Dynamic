import React from 'react';
import './homeTransition.css';
// import { CSSTransition } from 'react-transition-group';


const HomeTransition = () => {
    return (
        <div className='homeTransition'>
            <div className='contentTransition'>
                <h1>Web Dynamic</h1>
            </div>
            <div className='homeLine'></div>
        </div>
    );
}

export default HomeTransition;