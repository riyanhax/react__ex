import React from 'react';
import BalancesTable from 'cmp/Account/marginTradingPage/balancesTable/';
import './index.css';

export default (props) => {

    let balances = [
        {
            assets: 'Bitcoin',
            tricker: 'BTC',
            balance: '9.670192',
            locked: '0',
            total: '20392,12',
        },
        {
            assets: 'Bitcoin',
            tricker: 'BTC',
            balance: '9.670192',
            locked: '0',
            total: '20392,12',
        }

    ]

    return (
        <>
            <div className="main_wallet__tab_panel_top_line">
                <div>
                    <input className="main_wallet__search_coin_input" type="text" placeholder="Search coin" /><i className="fa fa-search"></i>
                </div>
                <div className="main_wallet__right_col">
                    <div>
                        <label className="check_box__container">
                            Hide small balances<i className="fa fa-question"></i>
                            <input type="checkbox" />
                            <span className="checkmark"></span>
                        </label>
                    </div>
                    <div>
                        <button className="button_green">CONVERT TO AZ</button>
                    </div>
                </div>
            </div>

            <BalancesTable balances={balances} />

        </>
    );
}