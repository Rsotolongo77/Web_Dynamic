import React from 'react';
import Lugs_n_Grub from '../images/Lugs_n_Grub/Lugs_n_Grub.png';
import Lugs_n_Grub2 from '../images/Lugs_n_Grub/Lugs_n_Grub2.png'
import './mainPortfolio.css';


const MainPortfolio = () => {
    return (
        <div className='portfolioContainer'>
            <div className='portfolioHeadContainer'>
                <h1 className='portfolioHead1'>CASE STUDY</h1>
                <h2 className='portfolioHead2'>Applications</h2>
            </div>
            <div className='portfolioContentContainer'>
                <div className='imgContainer'>
                    <img src={Lugs_n_Grub} className='contentImg' />
                    <img src={Lugs_n_Grub2} className='contentImg' />
                </div>
                <div className='descriptionContainer'>
                    <h1 className='contentDescription'>Lugs N' Grub is a Full-Stack, web based application, that aims to unite foodtruck owners
                            with hungry foodtruck customers.</h1>
                    <a href="https://evening-coast-01855.herokuapp.com/">Visit live site here</a>
                </div>
            </div>
        </div>
    );
}

export default MainPortfolio;