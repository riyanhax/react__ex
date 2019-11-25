import React from 'react';
import './index.css';
import { Link } from 'react-router-dom';

export default (props) =>{
    return(
        <>
            <div className="pop_up_menu__head">
                My Account
                <div className="pop_up_menu__container">
                            <ul className="pop_up_menu__link"><Link to='/account/'>My account</Link></ul>
                            <ul className="pop_up_menu__link"><Link to='/account/balance/'>My balances</Link></ul>
                            <ul className="pop_up_menu__link"><Link to='/account/transactions/'>Transaction history</Link></ul>
                            <ul className="pop_up_menu__link"><Link to='/account/settings/'>Settings</Link></ul>
                </div>
            </div>
        </>
    );
}