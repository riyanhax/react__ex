import React from 'react';
import './index.css';

export default (props) => {
    return(
        <>
            <div className="disable_two_fa_form__container">
                <div className="disable_two_fa_form__label">Disabling 2-factor authentication</div>
                <div className="disable_two_fa_form__main_container">
                    <label>2FA Code from application:</label>
                    <div className="disable_two_fa_form__input_container">
                        <input type="password"></input>
                        <i className="fab fa-google"></i>
                    </div>
                    <button className="button_green">continue</button>
                    <button className="button_gray">cancel</button>
                </div>
            </div>
        </>
    );
}