import React from 'react';
import './mainAbout.css';


const MainAbout = () => {
    return (
        <div className='aboutMain'>
            <div className='introAbout'><h1>Web Dynamic is.. </h1>
                <p>A solution focused web development company.<br />
                Taking pride in delivering exceptional and elegant<br />
                web designs, that will keep the user immersed in your brand.
                All while providing a smooth and efficient user experience.
                </p>
                <p> Our passion is levaraging the digital world for your success.
                Let us focus on perfecting your solution!</p></div>

            <div className='aboutGraph'>
                <div className='verticalLine'></div>
                <div className='horizontal_line1'></div>
                <div className='box1Container'>
                    <div className='box1Content'>
                        <div className='box1Front'>
                            <h1>Excellence</h1>
                        </div>
                        <div className='box1Back'>
                            <p>testing</p>
                        </div>
                    </div>
                </div>

                <div className='horizontal_line2'></div>
                <div className='box2Container'>
                    <div className='box2Content'>
                        <div className='box2Front'>
                            <h1>Simplicity</h1>
                        </div>
                        <div className='box2Back'>
                            <p>testing</p>
                        </div>
                    </div>
                </div>

                <div className='horizontal_line3'></div>
                <div className='box3Container'>
                    <div className='box3Content'>
                        <div className='box3Front'>
                            <h1>Value</h1>
                        </div>
                        <div className='box3Back'>
                            <p>testing</p>
                        </div>
                    </div>
                </div>

                <div className='horizontal_line4'></div>
                <div className='box4Container'>
                    <div className='box4Content'>
                        <div className='box4Front'>
                            <h1>Tailored</h1>
                        </div>
                        <div className='box4Back'>
                            <p>testing</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default MainAbout;