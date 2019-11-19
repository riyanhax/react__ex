import React from 'react';
import './index.css';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import GoogleAuthenticatorsTab from 'cmp/Account/authenticatorsPage/googleAuthenticatorTab/';
import SmsAuthenticatorTab from 'cmp/Account/authenticatorsPage/smsAuthenticatorTab/';

export default (props) => {
    return (
        <>
            <div className="authenticators_page__container">
                <div className="container__logo">MY <span className="red__text">SETTINGS</span></div>
                <div className="authenticators_page__headline_container">
                    <div className="authenticators_page__text_headline">2FA (TWO FACTOR) AUTHENTICATION SETUP</div>
                    <div className="authenticators__text">
                        <span className="red__text">Keep your account secure.</span> Watch your wallet setup <a className="white__text"><u>2FA (Two-Factor authentication)</u></a> like a beanstalk.
                        Welcome to Bitcoin's most advanced trading platform. Up to 100x leverage. Trading without expiry dates.
                        Industry-leading security. Fastest growing Bitcoin trading platform.
                    </div>
                </div>
                <div className="authenticators__tab_container">
                    <Tabs>
                        <TabList className="authenticators__tab_list">
                            <Tab className="authenticators__tab">Google Authenticator</Tab>
                            <Tab className="authenticators__tab">SMS Authenticator</Tab>
                        </TabList>
                        <TabPanel>
                                <GoogleAuthenticatorsTab/>
                        </TabPanel>
                        <TabPanel>
                                <SmsAuthenticatorTab/>
                        </TabPanel>
                    </Tabs>
                </div>
            </div>
        </>
    );
}