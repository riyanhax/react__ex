import React from 'react';
import './index.css';

export default function SmsAuthenticatorTab(){
    return(
        <>
            <div className="sms_authenticator_tab__container">
                <div className="sms_authenticator_tab__text_container">
                    2FA (short for 2-factor authentification) is an additional protection for your Azbit account.
                    The system will ask a secret code for entering, asset withdrawing and other important actions.
                </div>
                <div className="sms_authenticator_tab__line_container">
                    <div className="sms_authenticator_input_label">Enter phone number: </div>
                    <input className="sms_authenticator__input"></input>
                    <div className="sms_authenticator_send_button_container">
                        <button className="button__green">Send SMS</button>
                    </div>
                </div>
                <div className="sms_authenticator_tab__line_container">
                    <div className="sms_authenticator_input_label">SMS Code: </div>
                    <input className="sms_authenticator__input"></input>
                </div>
                <div className="sms_authenticator__enbl_sms_container">
                    <button className="button__green">Enabled SMS authenticator</button>
                </div>
            </div>
        </>
    );
}