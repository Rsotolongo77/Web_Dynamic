import React from 'react';
import './homeTransition.css';


const HomeTransition = () => {
    return (
        <div className='homeTransition'>
            <div className='contentTransition'>
                <h1 className='headerHome'>Web Dynamic</h1>
            </div>
            <div className='contentTransitionLine'>
                <div className='homeLine'></div>
            </div>
        </div>
    );
}

export default HomeTransition;