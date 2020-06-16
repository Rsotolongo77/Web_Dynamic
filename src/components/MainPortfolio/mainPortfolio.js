import React, { useEffect } from 'react';
import Aos from 'aos';
import Official_Port from '../images/Official_Port/Official_Port.png';
import Official_Port2 from '../images/Official_Port/Official_Port2.png';
import Lugs_n_Grub from '../images/Lugs_n_Grub/Lugs_n_Grub.png';
import Lugs_n_Grub2 from '../images/Lugs_n_Grub/Lugs_n_Grub2.png';
import Address_Book from '../images/Address_Book/Address_Book.png';
import Address_Book2 from '../images/Address_Book/Address_Book2.png';
import Arbor_Learning from '../images/Arbor_Learning/Arbor_Learning.png';
import Arbor_Learning2 from '../images/Arbor_Learning/Arbor_Learning2.png';
import Church from '../images/Church/Church.png';
import Church2 from '../images/Church/Church2.png';
import apARKi from '../images/apARKi/apARKi.png';
import apARKi2 from '../images/apARKi/apARKi2.png';
import Snob_Talk from '../images/Snob_Talk/Snob_Talk.png';
import Snob_Talk2 from '../images/Snob_Talk/Snob_Talk2.png';
import Friend_Finder from '../images/Friend_Finder/Friend_Finder.png';
import Friend_Finder2 from '../images/Friend_Finder/Friend_Finder2.png';
import Giftastic from '../images/Giftastic/Giftastic.png';
import Giftastic2 from '../images/Giftastic/Giftastic2.png';
import Trivia from '../images/Trivia/Trivia.png';
import Trivia2 from '../images/Trivia/Trivia2.png';
import Train_Scheduler from '../images/Train_Scheduler/Train_Scheduler.png';
import Train_Scheduler2 from '../images/Train_Scheduler/Train_Scheduler2.png';
import Scrapper from '../images/Scrapper/Scrapper.png';
import Scrapper2 from '../images/Scrapper/Scrapper2.png';
import Crystal from '../images/Crystal/Crystal.png';
import Crystal2 from '../images/Crystal/Crystal2.png';
import Burger from '../images/Burger/Burger.png';
import Burger2 from '../images/Burger/Burger2.png';
import Psychic from '../images/Psychic/Psychic.png';
import Psychic2 from '../images/Psychic/Psychic2.png';
import 'aos/dist/aos.css';
import './mainPortfolio.css';


const MainPortfolio = () => {
    useEffect(() => {
        Aos.init({ duration: 1250 })
    }, [])

    return (
        <div className='portfolioContainer'>
            <div className='portfolioHeadContainer'>
                <h1 className='portfolioHead1'>CASE STUDY</h1>
                <h2 className='portfolioHead2'>Applications</h2>
            </div>
            <div className='portfolioContentContainer'>
                <div className='imgContainer'>
                    <img src={Official_Port} data-aos='fade-right' className='contentImg' />
                    <img src={Official_Port2} data-aos='fade-left' className='contentImg' />
                </div>
                <div className='descriptionContainer'>
                    <h1 className='contentDescription'>Web Developer Portfolio page. Feel free to visit to review live project links (some projects currently still in progress).</h1>
                    <a href="https://rsotolongo77.github.io/Official-Portfolio/">Visit live site here</a>
                </div>

                <div className='imgContainer'>
                    <img src={Address_Book} data-aos='fade-right' className='contentImg' />
                    <img src={Address_Book2} data-aos='fade-left' className='contentImg' />
                </div>
                <div className='descriptionContainer'>
                    <h1 className='contentDescription'>Address-Book is a full-stack web app that provides an address book for the user. It's theme is established currently as a public directory for employees of the fictitious - Michael Scott Paper Company.</h1>
                    <a href="https://salty-citadel-44179.herokuapp.com/">Visit live site here</a>
                </div>

                <div className='imgContainer'>
                    <img src={Arbor_Learning} data-aos='fade-right' className='contentImg' />
                    <img src={Arbor_Learning2} data-aos='fade-left' className='contentImg' />
                </div>
                <div className='descriptionContainer'>
                    <h1 className='contentDescription'>Daycare is a website created for a client that owns a daycare; whom wishes to get market exposure in the digital space.</h1>
                    <a href="https://rsotolongo77.github.io/dayCare/">Visit live site here</a>
                </div>

                <div className='imgContainer'>
                    <img src={Church} data-aos='fade-right' className='contentImg' />
                    <img src={Church2} data-aos='fade-left' className='contentImg' />
                </div>
                <div className='descriptionContainer'>
                    <h1 className='contentDescription'>Church is a website for a local denomination looking to reach more followers via the digital space.</h1>
                    <a href="https://rsotolongo77.github.io/church/">Visit live site here</a>
                </div>

                <div className='imgContainer'>
                    <img src={Lugs_n_Grub} data-aos='fade-right' className='contentImg' />
                    <img src={Lugs_n_Grub2} data-aos='fade-left' className='contentImg' />
                </div>
                <div className='descriptionContainer'>
                    <h1 className='contentDescription'>Lugs N' Grub is a Full-Stack, web based application, that aims to unite foodtruck owners
                            with hungry foodtruck customers.</h1>
                    <a href="https://evening-coast-01855.herokuapp.com/">Visit live site here</a>
                </div>

                <div className='imgContainer'>
                    <img src={apARKi} data-aos='fade-right' className='contentImg' />
                    <img src={apARKi2} data-aos='fade-left' className='contentImg' />
                </div>
                <div className='descriptionContainer'>
                    <h1 className='contentDescription'>apARKi is an assistant that helps you find parking a space.</h1>
                    <a href="https://rsotolongo77.github.io/apARKi/">Visit live site here</a>
                </div>

                <div className='imgContainer'>
                    <img src={Snob_Talk} data-aos='fade-right' className='contentImg' />
                    <img src={Snob_Talk2} data-aos='fade-left' className='contentImg' />
                </div>
                <div className='descriptionContainer'>
                    <h1 className='contentDescription'>SnobTalk is a web application that presents users with an avenue to debate and review their thoughts on various topics.</h1>
                    <a href="https://glacial-eyrie-57579.herokuapp.com/">Visit live site here</a>
                </div>

                <div className='imgContainer'>
                    <img src={Friend_Finder} data-aos='fade-right' className='contentImg' />
                    <img src={Friend_Finder2} data-aos='fade-left' className='contentImg' />
                </div>
                <div className='descriptionContainer'>
                    <h1 className='contentDescription'>FriendFinder is a full stack app that mimicks a dating application. It is dirven by logic that compares user inputs to API data, linking them to the best match loaded in the database.</h1>
                    <a href="https://limitless-spire-88877.herokuapp.com/">Visit live site here</a>
                </div>

                <div className='imgContainer'>
                    <img src={Giftastic} data-aos='fade-right' className='contentImg' />
                    <img src={Giftastic2} data-aos='fade-left' className='contentImg' />
                </div>
                <div className='descriptionContainer'>
                    <h1 className='contentDescription'>GifTastic is a web application that uses giphy API to produce humorous images
                            according user input.</h1>
                    <a href="https://rsotolongo77.github.io/GifTastic/">Visit live site here</a>
                </div>

                <div className='imgContainer'>
                    <img src={Train_Scheduler} data-aos='fade-right' className='contentImg' />
                    <img src={Train_Scheduler2} data-aos='fade-left' className='contentImg' />
                </div>
                <div className='descriptionContainer'>
                    <h1 className='contentDescription'>TrainScheduler is a web application that mimicks a train schedule board.</h1>
                    <a href="https://rsotolongo77.github.io/TrainScheduler/">Visit live site here</a>
                </div>

                <div className='imgContainer'>
                    <img src={Trivia} data-aos='fade-right' className='contentImg' />
                    <img src={Trivia2} data-aos='fade-left' className='contentImg' />
                </div>
                <div className='descriptionContainer'>
                    <h1 className='contentDescription'>TriviaGame is a web application that presents the user with ten random trivia
                            questions.</h1>
                    <a href="https://rsotolongo77.github.io/TriviaGame/">Visit live site here</a>
                </div>

                <div className='imgContainer'>
                    <img src={Scrapper} data-aos='fade-right' className='contentImg' />
                    <img src={Scrapper2} data-aos='fade-left' className='contentImg' />
                </div>
                <div className='descriptionContainer'>
                    <h1 className='contentDescription'>Mongo-scraper is a web application that uses Mongoose and Cherrio to scrape news from
                            reddit.</h1>
                    <a href="https://fast-everglades-38446.herokuapp.com/">Visit live site here</a>
                </div>

                <div className='imgContainer'>
                    <img src={Burger} data-aos='fade-right' className='contentImg' />
                    <img src={Burger2} data-aos='fade-left' className='contentImg' />
                </div>
                <div className='descriptionContainer'>
                    <h1 className='contentDescription'>Burger is a full stack application that lets the user create custom burgers,
                            and "devour" them once created.</h1>
                    <a href="https://damp-cove-74433.herokuapp.com/">Visit live site here</a>
                </div>

                <div className='imgContainer'>
                    <img src={Crystal} data-aos='fade-right' className='contentImg' />
                    <img src={Crystal2} data-aos='fade-left' className='contentImg' />
                </div>
                <div className='descriptionContainer'>
                    <h1 className='contentDescription'>Crystal Collector is a web application that challenges the user to match the
                            random number generated by the program.</h1>
                    <a href="https://rsotolongo77.github.io/unit-4-game/">Visit live site here</a>
                </div>

                <div className='imgContainer'>
                    <img src={Psychic} data-aos='fade-right' className='contentImg' />
                    <img src={Psychic2} data-aos='fade-left' className='contentImg' />
                </div>
                <div className='descriptionContainer'>
                    <h1 className='contentDescription'>Psychic-Game is a web application that uses Javascript to generate a random
                    letter. Users then attempt to guess the letter the program has chosen.</h1>
                    <a href="https://rsotolongo77.github.io/Psychic-Game/">Visit live site here</a>
                </div>
            </div>
        </div>
    );
}

export default MainPortfolio;