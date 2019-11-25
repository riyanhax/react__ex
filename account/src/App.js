import React from 'react';
import './App.css';
import Header from './components/header/header';
import AccountSideBar from './components/accountSideBar/accountSideBar';
import Footer from './components/footer/footer';
import LevelSecurity from './components/levelSecurity/levelSecurity';

import NewsPage from './pages/newsPage/newsPage';
import MarginTradingPage from './pages/marginTradingPage/marginTradingPage';
import WalletWithdrawPage from './pages/walletWithdrawPage/walletWithdrawPage';
import AccountSettingsPage from './pages/accountSettingsPage/accountSettingsPage';
import ChangePasswordPage from './pages/changePasswordPage/changePassword';
import TransactionHistoryPage from './pages/transactionHistoryPage/index';
import DisableTwofaPage from './pages/disableTwofaPage/index';
import AuthenticatorsPage from  './pages/authenticatorsPage/index';
import ComingSoonPage from './pages/comingSoonPage/index';

function App() {
  return (
    <>
      <Header/>
      <div className="account__main_container">
        <AccountSideBar/>
        <div className="account_mid__container">
          <LevelSecurity/>
          <div className="page__container">
            <NewsPage/>
          </div>
        </div>
      </div>
      <Footer/> 
    </>
  );
}

export default App;
