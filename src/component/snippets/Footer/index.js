import React from 'react';
import { txtFooter } from './../../../constants/footer';

import './style.scss';

const Banner = () => {
    return (
        <footer>
            <div className="footer_banner">
                <span className="footer_banner_text">{ txtFooter.txtBanner }</span>
                <button className="footer_banner_submit" >{ txtFooter.txtBannerButton }</button>
            </div>
            
            <hr/>

            <div className="footer_container">
                <div className="footer_item1">
                    <span>{ txtFooter.txtItem1 }</span>
                    <span>{ txtFooter.txtItem2 }</span>
                    <span>{ txtFooter.txtItem3 }</span>
                </div>

                <div className="footer_item2">
                    <span className="followTxt">Follow Us</span>
                    <img className="footer_ico" src={require('./img/facebook_ico.png')} alt='facebook_ico'/>
                    <img className="footer_ico" src={require('./img/twitter_ico.png')} alt='twitter_ico'/>
                </div>
            </div>
        </footer>
    );
};

export default Banner;