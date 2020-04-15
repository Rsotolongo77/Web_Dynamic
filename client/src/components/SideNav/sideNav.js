import React from 'react';
import './sideNav.css';
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHome, faDoorOpen, faPalette, faPaperPlane } from '@fortawesome/free-solid-svg-icons'

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
                <li>{about}<Link to='/'>About</Link></li>
                <li>{portfolio}<Link to='/'>Portfolio</Link></li>
                <li>{contact}<Link to='/'>Contact</Link></li>
            </ul>
        </nav>
    );
};

export default SideNav;