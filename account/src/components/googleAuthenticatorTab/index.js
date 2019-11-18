import React from 'react';
import './index.css';

export default function GoogleAuthenticatorsTab() {
    return (
        <>
            <div className="google_authenticator_tab__container">
                <div className="google_authenticator_tab__text_container">
                    2FA (short for 2-factor authentification) is an additional protection for your Azbit account.
                    The system will ask a secret code for entering, asset withdrawing and other important actions.
                </div>
                <div className="google_authenticator_tab_form">
                    <div> <span className="numeration">
                        <span className="red__text">1. </span>Set up Google Authenticat or app to start
                          </span>
                    </div>
                    <div className="google_authenticator_tab_text">You can download it in case there is still no app on your smartphone.</div>
                    <div className="google_authenticator_link_donwload_container">
                        <div className="google_authenticator_link_donwload"></div>
                        <div className="google_authenticator_link_donwload"></div>
                        <div className="google_authenticator_link_donwload"></div>
                    </div>
                    <div> <span className="numeration">
                        <span className="red__text">2. </span>Оpen the app and scan QR code
                          </span>
                    </div>
                    <div className="google_authenticator_tab_text">Open the app and press "Begin setup", scan QR code or enter a key. </div>
                    <div className="google_authenticator__qr_container">
                        <div className="google_authenticator__key_input_container">
                            <input className="google_authenticator__key_input"></input>
                            <i className="fa fa-clone"></i>
                        </div>
                        <div>
                            <div className="google_authenticator__qr">

                            </div>
                        </div>
                    </div>
                    <div>
                        <div> <span className="numeration">
                            <span className="red__text">3. </span>Enter the received code in the text field below
                          </span>
                        </div>
                        <div className="google_authenticator_tab_text">Enter the received code in the field below and press "Activate 2FA" to finish two-factor authentification. </div>
                        <div className="google_authenticator__two_fa_input_conatiner">
                            <label className="google_authenticator_tab_text">2FA Code from application: </label>
                            <div className="google_authenticator__two_fa_input_icon_container">
                                <input className="google_authenticator__two_fa_input"></input><i className="fa fa-google"></i>
                            </div>
                        </div>
                        <div className="google_authenticator__active_button">
                            <button className="button__green">Activate 2FA</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
