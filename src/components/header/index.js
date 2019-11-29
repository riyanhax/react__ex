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
                    <div><a className="header__link">About</a></div>
                    <div><a className="header__link">Wallet</a></div>
                    <div><a className="header__link">Exchange</a></div>
                    <div><a className="header__link">IEO</a></div>
                    <div><a className="header__link">Loans</a></div>
                    <div><a className="header__link">Promo</a></div>
                    <div><a className="header__link">Games</a></div>
                    <div><a className="header__link">Tools</a></div>
                    <div><a className="header__link">Affiliates</a></div>
                </div>
                <div className="header__account_contaier_pop_up">
                    <i className="fa fa-user-circle green__text"></i>
                    <div className="header__account_pop_up white__text">
                        <Menu />
                    </div>
                    <div>Logout</div>
                </div>
                <div className="header__lang_container">
                    <i class="fa fa-globe-americas header__col__img" aria-hidden="true"></i>
                    <div className="header_lang">En</div>
                </div>
            </header>
        </>
    );
}