import React from 'react';
import './index.css';

export default (props) => {
    return (
        <>
            <div className="margin_trading__container">
                <div className="margin_trading__left_container">
                    <div className="margin_trading__box">
                        <div>Wallet Balacne</div>
                        <div className="white__text">0.0000 XBT</div>
                    </div>
                    <div className="margin_trading__box">
                        <div>Margin Balacne</div>
                        <div className="white__text">0.0000 XBT</div>
                    </div>
                    <div className="margin_trading__box">
                        <div>Available Balance</div>
                        <div className="white__text">0.0000 XBT</div>
                    </div>
                </div>
                <div className="margin_trading__right_container">
                    <div className="margin_trading__box">
                        <div>Wallet Balacne</div>
                        <div className="white__text">0.0000 XBT</div>
                    </div>
                    <div className="margin_trading__box"> 
                        <div>Unrealised P&L</div>
                        <div className="white__text">0.0000 XBT</div>
                    </div>
                    <div className="margin_trading__box"> 
                        <div>Margin Balacne</div>
                        <div className="white__text">0.0000 XBT</div>
                    </div>
                    <div className="margin_trading__box"> 
                        <div>Position Margin</div>
                        <div className="white__text">0.0000 XBT</div>
                    </div>
                    <div className="margin_trading__box"> 
                        <div>Order Margin</div>
                        <div className="white__text">0.0000 XBT</div>
                    </div>
                    <div className="margin_trading__box"> 
                        <div>Available Balance</div>
                        <div className="white__text">0.0000 XBT</div>
                    </div>
                    <div className="margin_trading__box"> 
                        <div>0% Margin Used 0x Leverage</div>
                    </div>
                </div>
            </div>
            <div className="margin_trading__text_container">
                    <span className="red__text">Margin trading risk disclosure:</span> Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                    Aenean euismod bibendum laoreet. Proin gravida dolor sit amet lacus accumsan et viverra justo commodo. 
                    Proin sodales pulvinar sic tempor. Sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. 
                    Nam fermentum, nulla luctus pharetra vulputate, felis tellus mollis orci, sed rhoncus pronin sapien nunc accuan eget.
                </div>
        </>
    );
}