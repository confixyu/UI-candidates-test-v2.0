import React from 'react';
import Banner from './banner.js';
import CardContent from "./CardContent";

import './style.scss';

const Home = () => {
    return (
        <div>
            <div className='carousel'>
                <div className="carousel-item">
                    <div className="carousel-item-cont">
                        <span>What's your opinion on</span>
                        <br/>
                        <span className="carousel-item-name">Pope Francis?</span>
                        <br/>
                        <span>He’s talking tough on clergy sexual abuse, but is he just another papal pervert protector? (thumbs down) or a true pedophile punishing pontiff? (thumbs up)</span>
                    </div>

                    <div className='carouselthumbs'>
                        <div className='carouselthumbup'></div>
                        <div className='carouselthumbdown'></div>
                    </div>
                </div>
            </div>

            <div className="home_container">
                <Banner/>
                <CardContent/>
            </div>
        </div>
    );
};

export default Home;