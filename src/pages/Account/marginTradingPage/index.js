import React from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import './index.css';
import WalletTab from 'cmp/Account/marginTradingPage/mainWalletTab/';
import TradingTab from 'cmp/Account/marginTradingPage/marginTradingTab/';
import MarginDemoTab from 'cmp/Account/marginTradingPage/marginDemoTab/';

export default (props) => {
    return (
        <>
            <div className="margin_page__container">
                <div className="container__logo">
                    <span className="white">MY</span> <span className="red__text">BALANCES</span>
                </div>
                <Tabs>
                    <TabList className="margin_page__tab_list">
                        <Tab className="margin_page__tab">Main Wallet</Tab>
                        <Tab className="margin_page__tab">Margin Trading</Tab>
                        <Tab className="margin_page__tab">Margin Demo</Tab>
                    </TabList>
                    <TabPanel>
                        <WalletTab />
                    </TabPanel>
                    <TabPanel>
                        <TradingTab />
                    </TabPanel>
                    <TabPanel>
                        <MarginDemoTab/>
                    </TabPanel>

                </Tabs>
            </div>
        </>
    );
}