import React from 'react';
import { Link } from "react-router-dom";

const SideNav = props => (
    <nav>
        <ul>
            <li><Link to='/'>Home</Link></li>
        </ul>
    </nav>
);

export default SideNav;