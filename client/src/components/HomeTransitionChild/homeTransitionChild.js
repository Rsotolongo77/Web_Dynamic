import React from 'react';
import './homeTransitionChild.css';
import { Link } from "react-router-dom";


const HomeTransitionChild = () => {
    return (
        <div className='homeTransitionChild'>
            <div className='transitionChildParent'>
                <div className='transitionChildContent1'><Link to='/about'>About</Link></div>
                <div className='transitionChildContent2'><Link to='/about'>Portfolio</Link></div>
                <div className='transitionChildContent3'><Link to='/about'>Contact</Link></div>
            </div>
        </div>
    );
}

export default HomeTransitionChild;