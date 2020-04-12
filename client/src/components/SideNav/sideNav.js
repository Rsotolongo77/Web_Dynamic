import React from 'react';
import './sideNav.css';
import { Link } from "react-router-dom";

const SideNav = props => {
    let drawerClasses = 'side-drawer';
    if (props.show) {
        drawerClasses = 'side-drawer open';
    }
    return (
        <nav className={drawerClasses}>
            <ul>
                <li><Link to='/'>Home</Link></li>
                <li><Link to='/'>About</Link></li>
                <li><Link to='/'>Portfolio</Link></li>
                <li><Link to='/'>Contact</Link></li>
            </ul>
        </nav>
    );
};

export default SideNav;