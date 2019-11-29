import React from 'react';
import './index.css';
import comingSoonLogo from '../../img/comingSoonLogo.png';

export default function ComingSoonPage(){
    return(
        <>
            <div className="coming_soon_page__container">
                <div className="coming_soon_page__logo_container">
                    <img src={comingSoonLogo} alt="logo"/>
                </div>
                <div className="coming_soon_page__main_text_container">
                    COMING SOON 
                </div>
                <div className="coming_soon_page__text_container">
                    This page is in the process of development now
                </div>
                <div className="coming_soon_page__button_container">
                    <button className="button_green">Previous page</button>
                </div>
            </div>
        </>
    );
}