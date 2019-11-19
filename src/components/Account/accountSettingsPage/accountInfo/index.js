import React from 'react';
import './index.css';

export default (props) => {
    return (
        <>
            <div className="account_info__container">
                <div className="container__logo">Name: <span className="white__text">Jeffrey D. Smith</span></div>
                <div className="account_info__item_container">
                    <div className="account_info__item">
                        <div className="account_info__item_avatar">

                        </div>
                        <div>
                            <div>E-mail: <span className="white">johndoe93@gmail.com</span></div>
                            <div>User ID: <span className="white">ae89438fhjh4</span></div>
                            <div>User name: <span className="white">{"<"}set now{">"}</span>
                                <sup>
                                    <i className="tooltip fa fa-question-circle"><div className="tooltiptext">Use your username instead of Email to login to your Azbit account.</div></i>
                                </sup>
                            </div>
                            <div>Phone: <span className="white">{"<"}set now{">"}</span>
                                    <sup>
                                        <i className="tooltip fa fa-question-circle"><div className="tooltiptext">Use your phone instead of Email to login to your Azbit account.</div></i>
                                    </sup>
                            </div>
                        </div>
                    </div>
                    <div className="account_info__item">
                        <div>
                            <div>Withdrawal limits: <span className="white">5 BTC / 24H  (<u>Get verified</u>)</span></div>
                            <div><span className="white">Use          tokens to pay fees (75% discount)</span></div>
                            <div>My referral link 
                                <sup>
                                    <i className="tooltip fa fa-question-circle"><div className="tooltiptext">Referal programm not active now.</div></i>
                                </sup>
                            </div>
                        </div>
                        <div className="account_info__item_VERIFIED">
                            <div className="red__text">NOT</div>
                            <div className="red__text">VERIFIED</div>
                            <div className="account_info__item_VERIFIED_link white__text"><u>Get verified</u></div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}