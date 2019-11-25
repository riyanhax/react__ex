import React from 'react';
import './accountSideBar.css'

export default function AccountSideBar() {
    return (
        <>
            <div className="account_sidebar__container">
                <div className="account_sidebar__wallets__container">
                    <div className="container__logo">
                        <span className="white__text">MY</span><span className="red__text">CABINET</span>
                    </div>
                    <div className="wallet__container">
                        <div className="wallet__data_container">
                            <div>Main wallet:</div>
                            <div className="wallet__values_container">
                                <div className="white__text">0.0012388984 BTC</div>
                                <div className="white__text">±6.80 USD</div>
                            </div>
                        </div>
                    </div>
                    <div className="wallet__container">
                        <div className="wallet__data_container">
                            <div>Margin trading:</div>
                            <div className="wallet__values_container">
                                <div className="white__text">0.0012388984 BTC</div>
                                <div className="white__text">±6.80 USD</div>
                            </div>
                        </div>
                    </div>
                    <div className="wallet__container">
                        <div className="wallet__data_container">
                            <div>Margin lending:</div>
                            <div className="wallet__values_container">
                                <div className="white__text">0.0012388984 BTC</div>
                                <div className="white__text">±6.80 USD</div>
                            </div>
                        </div>
                    </div>
                    <div className="wallet__container">
                        <div className="wallet__data_container">
                            <div>Lender’s deposits</div>
                            <div className="wallet__values_container">
                                <div className="white__text">0.0012388984 BTC</div>
                                <div className="white__text">±6.80 USD</div>
                            </div>
                        </div>
                    </div>
                    <div className="account_sidebar__wallets__button_container">
                        <div>
                            <button className="button__green">deposit</button>
                        </div>
                        <div>
                            <button className="button__green">transfer</button>
                        </div>
                    </div>
                </div>
                <div className="account_sidebar__banner_container">
                    <div></div>
                    <div></div>
                </div>
            </div>
        </>
    );
}