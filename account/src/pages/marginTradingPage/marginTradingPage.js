import React from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import './marginTradingPage.css';
import MainWalletTab from '../../components/mainWalletTab/mainWalletTab';
import MarginTradingTab from '../../components/marginTradingTab/marginTradingTab';
import MarginDemoTab from '../../components/marginDemoTab/marginDemoTab';

export default function MarginTradingPage() {
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
                        <MainWalletTab />
                    </TabPanel>
                    <TabPanel>
                        <MarginTradingTab />
                    </TabPanel>
                    <TabPanel>
                        <MarginDemoTab/>
                    </TabPanel>

                </Tabs>
            </div>
        </>
    );
}