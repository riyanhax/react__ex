import React from 'react';
import './balancesTable.css';
import Pagination from '../pagination/pagination';

export default function BalancesTable() {
    return (
        <>
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
                    <tr className="balances_table__td_container">
                        <td className="balances_table__td white__text"><i className="fa fa-bitcoin"></i>Bitcoin</td>
                        <td className="balances_table__td white__text">BTC</td>
                        <td className="balances_table__td white__text">9.670192</td>
                        <td className="balances_table__td white__text">0</td>
                        <td className="balances_table__td white__text">20392,12</td>
                        <td>
                            <table className="balances_table__actions_table">
                                <tbody>
                                    <tr>
                                        <td className="balances_table__actions_table_td white__text">Transfer</td>
                                        <td className="balances_table__actions_table_td white__text">Deposit</td>
                                        <td className="balances_table__actions_table_td white__text">Withdraw</td>
                                    </tr>
                                </tbody>
                            </table>
                        </td>
                    </tr>
                    <tr className="balances_table__td_container">
                        <td className="balances_table__td white__text"><i className="fa fa-bitcoin"></i>Bitcoin</td>
                        <td className="balances_table__td white__text">BTC</td>
                        <td className="balances_table__td white__text">9.670192</td>
                        <td className="balances_table__td white__text">0</td>
                        <td className="balances_table__td white__text">20392,12</td>
                        <td>
                            <table className="balances_table__actions_table">
                                <tbody>
                                    <tr>
                                        <td className="balances_table__actions_table_td white__texthite">Transfer</td>
                                        <td className="balances_table__actions_table_td white__text">Deposit</td>
                                        <td className="balances_table__actions_table_td white__text">Withdraw</td>
                                    </tr>
                                </tbody>
                            </table>
                        </td>
                    </tr>
                    <tr className="balances_table__td_container">
                        <td className="balances_table__td white__text"><i className="fa fa-bitcoin"></i>Bitcoin</td>
                        <td className="balances_table__td white__text">BTC</td>
                        <td className="balances_table__td white__text">9.670192</td>
                        <td className="balances_table__td white__text">0</td>
                        <td className="balances_table__td white__text">20392,12</td>
                        <td>
                            <table className="balances_table__actions_table">
                                <tbody>
                                    <tr>
                                        <td className="balances_table__actions_table_td white__text">Transfer</td>
                                        <td className="balances_table__actions_table_td white__text">Deposit</td>
                                        <td className="balances_table__actions_table_td white__text">Withdraw</td>
                                    </tr>
                                </tbody>
                            </table>
                        </td>
                    </tr>
                    <tr className="balances_table__td_container">
                        <td className="balances_table__td white__text"><i className="fa fa-bitcoin"></i>Bitcoin</td>
                        <td className="balances_table__td white__text">BTC</td>
                        <td className="balances_table__td white__text">9.670192</td>
                        <td className="balances_table__td white__text__text">0</td>
                        <td className="balances_table__td white__text__text">20392,12</td>
                        <td>
                            <table className="balances_table__actions_table">
                                <tbody>
                                    <tr>
                                        <td className="balances_table__actions_table_td white__text__text">Transfer</td>
                                        <td className="balances_table__actions_table_td white__text">Deposit</td>
                                        <td className="balances_table__actions_table_td white__text">Withdraw</td>
                                    </tr>
                                </tbody>
                            </table>
                        </td>
                    </tr>
                    <tr className="balances_table__td_container">
                        <td className="balances_table__td white__text"><i className="fa fa-bitcoin"></i>Bitcoin</td>
                        <td className="balances_table__td white__text">BTC</td>
                        <td className="balances_table__td white__text">9.670192</td>
                        <td className="balances_table__td white__text">0</td>
                        <td className="balances_table__td white__text">20392,12</td>
                        <td>
                            <table className="balances_table__actions_table">
                                <tbody>
                                    <tr>
                                        <td className="balances_table__actions_table_td white__text">Transfer</td>
                                        <td className="balances_table__actions_table_td white__text">Deposit</td>
                                        <td className="balances_table__actions_table_td white__text">Withdraw</td>
                                    </tr>
                                </tbody>
                            </table>
                        </td>
                    </tr>
                    <tr className="balances_table__td_container">
                        <td className="balances_table__td white__text"><i className="fa fa-bitcoin"></i>Bitcoin</td>
                        <td className="balances_table__td white__text">BTC</td>
                        <td className="balances_table__td white__text">9.670192</td>
                        <td className="balances_table__td white__text">0</td>
                        <td className="balances_table__td white__text">20392,12</td>
                        <td>
                            <table className="balances_table__actions_table">
                                <tbody>
                                    <tr>
                                        <td className="balances_table__actions_table_td white__text">Transfer</td>
                                        <td className="balances_table__actions_table_td white__text">Deposit</td>
                                        <td className="balances_table__actions_table_td white__text">Withdraw</td>
                                    </tr>
                                </tbody>
                            </table>
                        </td>
                    </tr>
                    <tr className="balances_table__td_container">
                        <td className="balances_table__td white__text"><i className="fa fa-bitcoin"></i>Bitcoin</td>
                        <td className="balances_table__td white__text">BTC</td>
                        <td className="balances_table__td white__text">9.670192</td>
                        <td className="balances_table__td white__text">0</td>
                        <td className="balances_table__td white__text">20392,12</td>
                        <td>
                            <table className="balances_table__actions_table">
                                <tbody>
                                    <tr>
                                        <td className="balances_table__actions_table_td white__text">Transfer</td>
                                        <td className="balances_table__actions_table_td white__text">Deposit</td>
                                        <td className="balances_table__actions_table_td white__text">Withdraw</td>
                                    </tr>
                                </tbody>
                            </table>
                        </td>
                    </tr>
                    <tr className="balances_table__td_container">
                        <td className="balances_table__td white__text"><i className="fa fa-bitcoin"></i>Bitcoin</td>
                        <td className="balances_table__td white__text">BTC</td>
                        <td className="balances_table__td white__text">9.670192</td>
                        <td className="balances_table__td white__text">0</td>
                        <td className="balances_table__td white__text">20392,12</td>
                        <td>
                            <table className="balances_table__actions_table">
                                <tbody>
                                    <tr>
                                        <td className="balances_table__actions_table_td white__text">Transfer</td>
                                        <td className="balances_table__actions_table_td white__text">Deposit</td>
                                        <td className="balances_table__actions_table_td white__text">Withdraw</td>
                                    </tr>
                                </tbody>
                            </table>
                        </td>
                    </tr>
                    <tr className="balances_table__td_container">
                        <td className="balances_table__td white__text"><i className="fa fa-bitcoin"></i>Bitcoin</td>
                        <td className="balances_table__td white__text">BTC</td>
                        <td className="balances_table__td white__text">9.670192</td>
                        <td className="balances_table__td white__text">0</td>
                        <td className="balances_table__td white__text">20392,12</td>
                        <td>
                            <table className="balances_table__actions_table">
                                <tbody>
                                    <tr>
                                        <td className="balances_table__actions_table_td white__text">Transfer</td>
                                        <td className="balances_table__actions_table_td white__text">Deposit</td>
                                        <td className="balances_table__actions_table_td white__text">Withdraw</td>
                                    </tr>
                                </tbody>
                            </table>
                        </td>
                    </tr>
                    <tr className="balances_table__td_container">
                        <td className="balances_table__td white__text"><i className="fa fa-bitcoin"></i>Bitcoin</td>
                        <td className="balances_table__td white__text">BTC</td>
                        <td className="balances_table__td white__text">9.670192</td>
                        <td className="balances_table__td white__text">0</td>
                        <td className="balances_table__td white__text">20392,12</td>
                        <td>
                            <table className="balances_table__actions_table">
                                <tbody>
                                    <tr>
                                        <td className="balances_table__actions_table_td white__text">Transfer</td>
                                        <td className="balances_table__actions_table_td white__text">Deposit</td>
                                        <td className="balances_table__actions_table_td white__text">Withdraw</td>
                                    </tr>
                                </tbody>
                            </table>
                        </td>
                    </tr>
                    <tr className="balances_table__td_container">
                        <td className="balances_table__td white__text"><i className="fa fa-bitcoin"></i>Bitcoin</td>
                        <td className="balances_table__td white__text">BTC</td>
                        <td className="balances_table__td white__text">9.670192</td>
                        <td className="balances_table__td white__text">0</td>
                        <td className="balances_table__td white__text">20392,12</td>
                        <td>
                            <table className="balances_table__actions_table">
                                <tbody>
                                    <tr>
                                        <td className="balances_table__actions_table_td white__text">Transfer</td>
                                        <td className="balances_table__actions_table_td white__text">Deposit</td>
                                        <td className="balances_table__actions_table_td white__text">Withdraw</td>
                                    </tr>
                                </tbody>
                            </table>
                        </td>
                    </tr>
                </tbody>
            </table>
            <Pagination/>
        </>
    );
}