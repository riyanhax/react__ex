import React from 'react';
import './index.css';
import Pagination from 'cmp/Account/pagination/';

export default (props) => {
    let balancesTableItems = props.balances.map((item, index) => {
        return (
            <tr key={index} className="balances_table__td_container">
                <td className="balances_table__td white__text"><i className="fab fa-bitcoin"></i>{item.assets}</td>
                <td className="balances_table__td white__text">{item.tricker}</td>
                <td className="balances_table__td white__text">{item.balance}</td>
                <td className="balances_table__td white__text">{item.locked}</td>
                <td className="balances_table__td white__text">{item.total}</td>
                <td>
                    <div className="balances_table__actions_container">
                        <div>Deposit</div>
                        <div>Withdraw</div>
                    </div>
                </td>
            </tr>
        );
    });
    return (
        <>
            <div className="balances_table__container">
                <table className="balances_table">
                    <tbody>
                        <tr className="balances_table__th_container">
                            <th className="balances_table__th">Assets</th>
                            <th className="balances_table__th">Tricker</th>
                            <th className="balances_table__th">Balance</th>
                            <th className="balances_table__th">Locked</th>
                            <th className="balances_table__th">Total</th>
                            <th className="balances_table__th">Actions</th>
                        </tr>
                        {balancesTableItems}
                    </tbody>
                </table>
            </div>
            <Pagination />
        </>
    );
}