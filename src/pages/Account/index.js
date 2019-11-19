import React from 'react';
import './index.css';
import Header from 'cmp/header/';
import SideBar from 'cmp/Account/accountSideBar/'
import LevelSecurity from 'cmp/Account/levelSecurity';
import Footer from 'cmp/footer/';

import NewsPage from 'pg/Account/newsPage/';
import WalletWithdrawPage from 'pg/Account/walletWithdrawPage/';
import TransationHistoryPage from 'pg/Account/transactionHistoryPage/';
import MarginTradingPage from 'pg/Account/marginTradingPage/';
import DisableTwofaPage from 'pg/Account/disableTwofaPage/';
import ChangePasswordPage from 'pg/Account/changePasswordPage/';
import AuthenticatorsPage from 'pg/Account/authenticatorsPage/';
import AccountSettingsPage from 'pg/Account/accountSettingsPage/';

export default (props) => {
    return (
        <>
            <Header/>
            <div className="account__main_container">
                <SideBar />
                <div className="account_mid__container">
                    <LevelSecurity />
                    <div className="page__container">
                    <AccountSettingsPage/>
                    </div>
                </div>
            </div>
            <Footer/>
        </>
    )
}