import React from 'react';
import './changePasswordForm.css';

export default function ChangePasswordForm() {
    return (
        <>
            <div className="change_password__form">
                <div>
                    <div>
                        <label className="change_password__label">Old Password</label>
                    </div>
                    <input className="change_password__input"></input>
                </div>
                <div>
                    <div>
                        <label className="change_password__label" >New Password:</label>
                    </div>
                    <input className="change_password__input"></input>
                </div>
                <div>
                    <div>
                        <label className="change_password__label" >Confirm Password:</label>
                    </div>
                    <input className="change_password__input"></input>
                </div>
                <div className="change_password__button_container">
                    <div>
                        <button className="button_green">Change Passowrd</button>
                    </div>
                    <div>
                        <button className="button_gray">Cancel</button>
                    </div>
                </div>
            </div>
        </>
    );
}