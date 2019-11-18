import React from 'react';
import './index.css';

export default function TransactionHistoryTable(){
    return(
        <>
            <div className="transaction_history_table__container">
                <table className="transaction_history_table">
                    <tbody>
                        <tr className="transaction_history_table__line">
                            <th className="transaction_history_table__item">Asset / Coin</th>
                            <th className="transaction_history_table__item">Date / Time</th>
                            <th className="transaction_history_table__item">Type</th>
                            <th className="transaction_history_table__item">Price</th>
                            <th className="transaction_history_table__item">Amount</th>
                            <th className="transaction_history_table__item">Fee</th>
                            <th className="transaction_history_table__item">Balance</th>
                            <th className="transaction_history_table__item">Comment</th>
                        </tr>
                        <tr className="transaction_history_table__line">
                            <td className="transaction_history_table__item">BTC</td>
                            <td className="transaction_history_table__item"></td>
                            <td className="transaction_history_table__item">Exchange (buy)</td>
                            <td className="transaction_history_table__item"></td>
                            <td className="transaction_history_table__item"></td>
                            <td className="transaction_history_table__item">0.00128</td>
                            <td className="transaction_history_table__item"></td>
                            <td className="transaction_history_table__item"></td>
                        </tr>
                        <tr className="transaction_history_table__line">
                            <td className="transaction_history_table__item">LTC</td>
                            <td className="transaction_history_table__item"></td>
                            <td className="transaction_history_table__item">Referral #2391298</td>
                            <td className="transaction_history_table__item"></td>
                            <td className="transaction_history_table__item"></td>
                            <td className="transaction_history_table__item">0.0012</td>
                            <td className="transaction_history_table__item"></td>
                            <td className="transaction_history_table__item"></td>
                        </tr>
                        <tr className="transaction_history_table__line">
                            <td className="transaction_history_table__item">DASH</td>
                            <td className="transaction_history_table__item"></td>
                            <td className="transaction_history_table__item">Referral #2391298</td>
                            <td className="transaction_history_table__item"></td>
                            <td className="transaction_history_table__item"></td>
                            <td className="transaction_history_table__item">$70</td>
                            <td className="transaction_history_table__item"></td>
                            <td className="transaction_history_table__item"></td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </>
    );
}