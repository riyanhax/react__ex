import React from 'react';
import './index.css'

export default (props)=> {
    return (
        <>
            <div className="level_security__container">
                <div className="notification_container red__text">
                    <span><i className="fa fa-unlock"></i>Your account has the Lowest level of security! Why? Learn more.</span><i className="fa fa-times white__text"></i>
                </div>
            </div>
        </>
    );
}