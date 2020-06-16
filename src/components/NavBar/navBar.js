import React from 'react';
import './navBar.css';
import white_logo_transparent from '../images/logo/white_logo_transparent.png';
import SideNavToggle from '../SideNav/sideNavToggle';

const navBar = props => (
    <header className='navHead'>
        <nav className='navBar'>
            <div className='hamDiv'>
                <SideNavToggle click={props.drawerClickHandler} />
            </div>

            <div className='spacer'></div>

            <div className='logoDiv'>
                <img src={white_logo_transparent} />
            </div>
        </nav>
    </header>
);

export default navBar;