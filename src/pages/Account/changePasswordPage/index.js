import React from 'react';
import './index.css';
import ChangePasswordForm from 'cmp/Account/changePasswordPage/changePasswordForm';

export default (props) => {
    return (
        <>
            <div className="change_password_page__container">
                <div className="container__logo">MY <span className="red__text">SETTINGS</span></div>
                <div className="change_password__text_container flex">
                    <div className="change_password__text">
                        <span className="red__text">Keep your account secure.</span> Watch your wallet setup <a className="white__text"><u>2FA (Two-Factor authentication)</u></a> like a beanstalk.
                        Welcome to Bitcoin's most advanced trading platform. Up to 100x leverage. Trading without expiry dates.
                        Industry-leading security. Fastest growing Bitcoin trading platform.
                    </div>
                    <div>
                        <i className="fa fa-exclamation-circle red__text"></i>
                    </div>
                </div>
                <div className="change_password__container">
                        <div className="container__logo">
                            CHANGE PASSWORD
                        </div>
                        <ChangePasswordForm/>
                </div>
            </div>
        </>
    );
}