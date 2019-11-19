import React from 'react';
import './index.css';

export default (props) => {
    return (
        <>
            <footer className="footer">
                <div className="container__logo white__text">
                    WE'RE SOCIAL
                 </div>
                <div className="footer_col_container">
                    <div className="footer_column">
                        <div className="footer__social_icons">
                            <i className="fab fa-twitter"></i>
                            <i className="fab fa-facebook-f"></i>
                            <i className="fab fa-youtube"></i>
                            <i className="fab fa-instagram"></i>
                            <i className="fab fa-reddit-alien"></i>
                            <i className="fab fa-medium"></i>
                        </div>
                        <div className="footer_left_column_text_container">
                            <div className="footer_text">(c) 2018-2019 AZBIT GLOBAL LTD</div>
                            <div className="footer_text dark_grey__text">Disclaimer  -  AML Policy</div>
                            <div className="footer_text dark_grey__text">Privacy Policy - Terms of Use</div>
                        </div>
                        <div className="footer_img_container">
                            <div className="footer_img"></div>
                            <div className="footer_img"></div>
                        </div>
                    </div>
                    <div className="footer_column">
                        <div className="footer__mid_container">
                            <div className="footer__mid_container_item">
                                <div className="footer_text">List your IEO/Asset</div>
                                <div className="footer_text">Affiliates</div>
                                <div className="footer_text">Fees</div>
                                <div className="footer_text">Developer</div>
                                <div className="footer_text">OTS trades</div>
                            </div>
                            <div className="footer__mid_container_item">
                                <div className="footer_text">Contact Us</div>
                                <div className="footer_text">Azbit Ambassador</div>
                                <div className="footer_text">AZ contract</div>
                                <div className="footer_text">Sitemap</div>
                            </div>
                        </div>
                    </div>
                    <div className="footer_column">
                        <div className="footer_text">Azbit is a part of global financial ecosystem.
                                                      Aenean euismod bibendum laoreet.
                                                      Proin gravida dolor sit amet lacus accumsan et viverra justo commodo.
                                                      Proin sodales pulvinar sic tempor.
                        </div>
                        <div className="footer_text dark_grey__text">
                            Read more on Azbit ideology
                        </div>
                        <div className="footer_text">
                            Gaming services provided by AZ Play Ltd. Gambling license pending.
                        </div>
                    </div>
                </div>
            </footer>
        </>
    );
}