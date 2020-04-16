import React from 'react';
import './homeTransitionChild.css';


const HomeTransitionChild = () => {
    return (
        <div className='homeTransitionChild'>
            <div className='transitionChildParent'>
                <div className='transitionChildContent'>About</div>
                <div className='transitionChildContent'>Portflio</div>
                <div className='transitionChildContent'>Contact</div>
            </div>
        </div>
    );
}

export default HomeTransitionChild;