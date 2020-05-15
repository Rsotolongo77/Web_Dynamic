import React from 'react';
import './homeTransitionChild.css';
import { Link } from "react-router-dom";


const HomeTransitionChild = () => {
    return (
        <div className='homeTransitionChild'>
            <div className='transitionChildParent'>
                <Link className='transitionChildContent1' to='/about'>About</Link>
                <Link className='transitionChildContent2' to='/portfolio'>Portfolio</Link>
                <Link className='transitionChildContent3' to='/contact'>Contact</Link>
            </div>
        </div>
    );
}

export default HomeTransitionChild;