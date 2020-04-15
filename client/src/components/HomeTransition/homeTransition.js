import React from 'react';
import './homeTransition.css';
import { CSSTransition } from 'react-transition-group';


const HomeTransition = () => {
    return (
        <div className='homeTransition'>
            <div className='contentTransition'>
                <CSSTransition>
                    <h1 class='fadeHome'>Web Dynamic</h1>
                </CSSTransition>
            </div>
            <hr />
        </div>
    );
}

export default HomeTransition;