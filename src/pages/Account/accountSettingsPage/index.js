import React from "react";
import "./index.css";
import AccountInfo from 'cmp/Account/accountSettingsPage/accountInfo/';
import LogHistoryTable from 'cmp/Account/accountSettingsPage/lastLoginHistoryTable/';

export default (props)=>{
    return(
        <>
            <div className="account_settings__page_container">
                <div className="container__logo">MY <span className="red__text">SETTINGS</span></div>
                <div className="account_settings__text_container flex">
                    <div className="account_settings__text">
                        <span className="red__text">Keep your account secure.</span> Watch your wallet setup <a className="white__text"><u>2FA (Two-Factor authentication)</u></a> like a beanstalk. 
                        Welcome to Bitcoin's most advanced trading platform. Up to 100x leverage. Trading without expiry dates. 
                        Industry-leading security. Fastest growing Bitcoin trading platform.
                    </div>
                    <div>
                        <i className="fa fa-exclamation-circle red__text"></i>
                    </div>
                </div>
                <div className="account_settings__container">
                    <AccountInfo/>
                    <div className="account_settings__chng_auth_container">
                        <div className="account_settings__chng_auth">
                            <div><i className="fa fa-unlock"></i></div>
                            <div>CHANGE PASSWORD</div>
                        </div>
                        <div className="account_settings__chng_auth">
                            <div><i className="red__text fa fa-times-circle"></i></div>
                            <div>2FA (TWO-FACTOR) <div>AUTHENTICATION</div></div>
                        </div>
                    </div>
                </div>
                <div className="account_settings__history_container">
                    <LogHistoryTable/>
                </div>
            </div>  
        </>
    );
}