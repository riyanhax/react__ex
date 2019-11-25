import React from 'react';
import './index.css';

import Menu from 'cmp/accountMenu';


export default (props) => {
    return (
        <>
            <header className="header__account">
                <div className="header__logo_container white__text">
                    <img className="header__logo" src="./assets/img/logo.png" alt="logo" />Azbit
                </div>
                <div className="header__pages_container">
                    <div>About</div>
                    <div>Wallet</div>
                    <div>Exchange</div>
                    <div>IEO</div>
                    <div>Loans</div>
                    <div>Promo</div>
                    <div>Games</div>
                    <div>Tools</div>
                    <div>Affiliates</div>
                </div>
                <div className="header__account_contaier_pop_up">
                    <i className="fa fa-user-circle green__text"></i>
                    <div className="header__account_pop_up white__text">
                        <Menu />
                    </div>

                    <div>Logout</div>
                </div>
                <div className="header__lang_container">
                    <i className="fa fa-globe"></i>
                    <div className="header_lang">En</div>
                </div>
            </header>
        </>
    );
}