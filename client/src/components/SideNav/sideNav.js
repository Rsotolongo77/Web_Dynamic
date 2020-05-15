import React from 'react';
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faDoorOpen, faPalette, faPaperPlane } from '@fortawesome/free-solid-svg-icons';
import './sideNav.css';

const home = <FontAwesomeIcon icon={faHome} id='icons' />
const about = <FontAwesomeIcon icon={faDoorOpen} id='icons' />
const portfolio = <FontAwesomeIcon icon={faPalette} id='icons' />
const contact = <FontAwesomeIcon icon={faPaperPlane} id='icons' />

const SideNav = props => {
    let drawerClasses = 'side-drawer';
    if (props.show) {
        drawerClasses = 'side-drawer open';
    }
    return (
        <nav className={drawerClasses}>
            <ul>
                <li>{home}<Link to='/'>Home</Link></li>
                <li>{about}<Link to='/about'>About</Link></li>
                <li>{portfolio}<Link to='/portfolio'>Portfolio</Link></li>
                <li>{contact}<Link to='/contact'>Contact</Link></li>
            </ul>
        </nav>
    );
};

export default SideNav;